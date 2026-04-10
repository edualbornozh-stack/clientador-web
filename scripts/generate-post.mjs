#!/usr/bin/env node
/**
 * generate-post.mjs
 * Genera automáticamente una nota de blog para Clientador usando Claude API.
 *
 * Uso:
 *   node scripts/generate-post.mjs                  # Genera el próximo tema pendiente
 *   node scripts/generate-post.mjs --push            # Genera + commit + push a GitHub
 *   node scripts/generate-post.mjs --slug "mi-tema"  # Genera un tema específico
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ─── Config ───────────────────────────────────────────────
const BLOG_POSTS_FILE = path.join(ROOT, "src/lib/blog-posts.ts");
const TOPICS_FILE = path.join(ROOT, "scripts/topics.json");
const GITHUB_REMOTE = "https://github.com/edualbornozh-stack/clientador-web.git";

const args = process.argv.slice(2);
const shouldPush = args.includes("--push");
const slugArg = args.find((a) => a.startsWith("--slug="))?.split("=")[1];

// ─── Helpers ──────────────────────────────────────────────
function getExistingSlugs() {
  const content = fs.readFileSync(BLOG_POSTS_FILE, "utf-8");
  const matches = content.match(/slug:\s*["']([^"']+)["']/g) || [];
  return matches.map((m) => m.match(/["']([^"']+)["']/)[1]);
}

function getNextTopic(existingSlugs) {
  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, "utf-8"));
  if (slugArg) return topics.find((t) => t.slug === slugArg) || null;
  return topics.find((t) => !existingSlugs.includes(t.slug)) || null;
}

function getCurrentMonth() {
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const now = new Date();
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
}

function appendPostToFile(post) {
  const content = fs.readFileSync(BLOG_POSTS_FILE, "utf-8");

  // Serializar el post como TypeScript
  const postTs = `  ${JSON.stringify(post, null, 2)
    .replace(/^/gm, "  ")
    .trimStart()},`;

  // Insertar antes del cierre del array
  const updated = content.replace(
    /^];$/m,
    `${postTs}\n];`
  );

  fs.writeFileSync(BLOG_POSTS_FILE, updated, "utf-8");
}

// ─── Main ─────────────────────────────────────────────────
async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("❌ Falta ANTHROPIC_API_KEY en las variables de entorno.");
    console.error("   Agrega ANTHROPIC_API_KEY=sk-... a tu .env.local o exporta la variable.");
    process.exit(1);
  }

  const existingSlugs = getExistingSlugs();
  const topic = getNextTopic(existingSlugs);

  if (!topic) {
    console.log("✅ Todos los temas del topics.json ya están publicados.");
    console.log("   Agrega nuevos temas a scripts/topics.json para continuar.");
    process.exit(0);
  }

  console.log(`\n📝 Generando artículo: "${topic.title}"`);
  console.log(`   Slug: ${topic.slug}`);
  console.log(`   Categoría: ${topic.category}\n`);

  const client = new Anthropic({ apiKey });

  const prompt = `Eres el redactor de contenido de Clientador, una plataforma de IA para pymes latinoamericanas (WhatsApp Business API, CRM inteligente, agenda automática, chatbots).

Genera un artículo de blog completo en español, persuasivo y optimizado para SEO/GEO, con el siguiente tema:

TÍTULO: ${topic.title}
CATEGORÍA: ${topic.category}
KEYWORDS SEO: ${topic.keywords.join(", ")}
PAÍSES/CIUDADES TARGET: ${topic.geo.join(", ")}

El artículo debe:
1. Ser informativo pero siempre terminar llevando al lector a contratar Clientador
2. Mencionar naturalmente los países/ciudades target para SEO local
3. Incluir datos y estadísticas (puedes inventar cifras verosímiles)
4. Tener un tono profesional pero cercano, en español latinoamericano
5. Duración: 8-12 minutos de lectura
6. Mencionar Clientador de forma natural, no agresiva, como la solución recomendada

Responde ÚNICAMENTE con un JSON válido con esta estructura exacta (sin markdown, sin texto extra):

{
  "slug": "${topic.slug}",
  "title": "${topic.title}",
  "metaTitle": "título SEO de máx 65 caracteres",
  "metaDescription": "descripción SEO de máx 155 caracteres con keyword principal",
  "category": "${topic.category}",
  "date": "${getCurrentMonth()}",
  "readTime": "X min lectura",
  "intro": "párrafo introductorio de 2-3 oraciones que engancha al lector",
  "sections": [
    {
      "type": "text",
      "title": "Título de sección",
      "content": "párrafos separados por doble salto de línea (\\n\\n)"
    },
    {
      "type": "cards",
      "title": "Título de sección con beneficios/comparativas",
      "items": [
        { "label": "01 — Label del punto", "content": "descripción del punto" }
      ]
    },
    {
      "type": "steps",
      "title": "Título de sección con pasos",
      "items": [
        { "label": "Paso 1: Nombre del paso", "content": "descripción del paso" }
      ]
    },
    {
      "type": "bullets",
      "title": "Título de lista",
      "bullets": [
        { "text": "texto del punto", "negative": false }
      ]
    }
  ],
  "ctaTitle": "título del call to action al final del artículo",
  "ctaDescription": "descripción del CTA, máx 2 oraciones, orientada a agendar demo"
}

Usa entre 4 y 6 secciones variando los tipos. Incluye al menos una sección de tipo "cards" y una de tipo "text". El artículo debe sentirse como una guía experta, no como publicidad directa.`;

  try {
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    const rawJson = message.content[0].text.trim();

    // Limpiar por si Claude agrega ```json
    const cleanJson = rawJson.replace(/^```json\s*/i, "").replace(/\s*```$/i, "");
    const post = JSON.parse(cleanJson);

    console.log("✅ Artículo generado correctamente");
    console.log(`   Secciones: ${post.sections.length}`);
    console.log(`   Tiempo lectura: ${post.readTime}\n`);

    appendPostToFile(post);
    console.log(`✅ Post agregado a src/lib/blog-posts.ts`);

    // Actualizar sitemap con nuevo slug
    const sitemapFile = path.join(ROOT, "src/app/sitemap.ts");
    const sitemapContent = fs.readFileSync(sitemapFile, "utf-8");
    if (!sitemapContent.includes(post.slug)) {
      console.log(`ℹ️  El sitemap se actualiza automáticamente desde blog-posts.ts`);
    }

    if (shouldPush) {
      console.log("\n🚀 Haciendo commit y push a GitHub...");
      try {
        execSync(`cd "${ROOT}" && git add src/lib/blog-posts.ts`, { stdio: "inherit" });
        execSync(
          `cd "${ROOT}" && git commit -m "feat(blog): nuevo artículo — ${post.title.slice(0, 60)}"`,
          { stdio: "inherit" }
        );

        const token = process.env.GITHUB_TOKEN;
        const remote = token
          ? GITHUB_REMOTE.replace("https://", `https://${token}@`)
          : GITHUB_REMOTE;

        execSync(`cd "${ROOT}" && git push "${remote}" main`, { stdio: "inherit" });
        console.log("✅ Push exitoso — Vercel desplegará automáticamente en ~1 minuto");
      } catch (e) {
        console.error("❌ Error en git push:", e.message);
        console.error("   Asegúrate de tener GITHUB_TOKEN en el entorno o autenticación SSH configurada.");
      }
    } else {
      console.log("\nℹ️  Para publicar automáticamente, ejecuta:");
      console.log("   ANTHROPIC_API_KEY=... GITHUB_TOKEN=... node scripts/generate-post.mjs --push\n");
    }
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.error("❌ Error parseando el JSON de Claude. Intenta de nuevo.");
    } else {
      console.error("❌ Error:", err.message);
    }
    process.exit(1);
  }
}

main();
