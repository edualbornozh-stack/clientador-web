#!/usr/bin/env node
/**
 * generate-post.mjs
 * Genera automáticamente una nota de blog para Clientador usando Claude API.
 * Los temas se generan dinámicamente — nunca se agotan.
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_POSTS_FILE = path.join(ROOT, "src/lib/blog-posts.ts");
const GENERATED_FILE = path.join(ROOT, "src/lib/generated-posts.json");

function getExistingSlugsAndTitles() {
  // Read from the TS file (manual posts) + the JSON file (generated posts)
  const ts = fs.readFileSync(BLOG_POSTS_FILE, "utf-8");
  const tsSlugs = (ts.match(/(?:"slug"|slug):\s*["']([^"']+)["']/g) || [])
    .map((m) => m.match(/:\s*["']([^"']+)["']/)[1]);
  const tsTitles = (ts.match(/(?:"title"|title):\s*["']([^"']+)["']/g) || [])
    .map((m) => m.match(/:\s*["']([^"']+)["']/)[1]);

  let jsonSlugs = [], jsonTitles = [];
  if (fs.existsSync(GENERATED_FILE)) {
    const generated = JSON.parse(fs.readFileSync(GENERATED_FILE, "utf-8"));
    jsonSlugs = generated.map((p) => p.slug);
    jsonTitles = generated.map((p) => p.title);
  }

  return {
    slugs: [...new Set([...tsSlugs, ...jsonSlugs])],
    titles: [...new Set([...tsTitles, ...jsonTitles])],
  };
}

function getCurrentMonth() {
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const now = new Date();
  return `${months[now.getMonth()]} ${now.getFullYear()}`;
}

function appendPostToFile(post) {
  // Always write to the JSON file — never touches blog-posts.ts
  let existing = [];
  if (fs.existsSync(GENERATED_FILE)) {
    existing = JSON.parse(fs.readFileSync(GENERATED_FILE, "utf-8"));
  }
  // Avoid duplicates
  if (!existing.find((p) => p.slug === post.slug)) {
    existing.push(post);
  }
  fs.writeFileSync(GENERATED_FILE, JSON.stringify(existing, null, 2), "utf-8");
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("❌ Falta ANTHROPIC_API_KEY");
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });
  const { slugs: existingSlugs, titles: existingTitles } = getExistingSlugsAndTitles();

  console.log(`\n🧠 Generando idea de tema (${existingSlugs.length} posts publicados)...`);

  // ── Paso 1: Claude elige el tema ──────────────────────────
  const topicPrompt = `Eres el estratega de contenido de Clientador, una plataforma de IA para pymes latinoamericanas (WhatsApp Business API, CRM inteligente, agenda automática, chatbots multicanal).

Ya existen estos artículos publicados (NO repitas estos temas):
${existingTitles.map((t, i) => `${i + 1}. ${t}`).join("\n")}

Genera UNA nueva idea de artículo de blog, distinta a las anteriores, que:
- Sea útil para dueños de pymes en Chile, México, Colombia, Argentina o Perú
- Esté orientada a un rubro específico O a una funcionalidad de IA para negocios
- Tenga alto potencial SEO en búsquedas en español latinoamericano
- Sirva para atraer clientes a Clientador

Responde ÚNICAMENTE con JSON válido (sin markdown):
{
  "slug": "slug-en-kebab-case-unico",
  "title": "Título del artículo atractivo y con keyword principal",
  "category": "Categoría del artículo",
  "keywords": ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  "geo": ["País o ciudad 1", "País o ciudad 2", "País o ciudad 3"]
}`;

  const topicMsg = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [{ role: "user", content: topicPrompt }],
  });

  const topicRaw = topicMsg.content[0].text.trim()
    .replace(/^```json\s*/i, "").replace(/\s*```$/i, "");
  const topic = JSON.parse(topicRaw);

  // Verificar que el slug no exista ya
  if (existingSlugs.includes(topic.slug)) {
    topic.slug = `${topic.slug}-${Date.now()}`;
  }

  console.log(`✅ Tema elegido: "${topic.title}"`);
  console.log(`   Slug: ${topic.slug}`);
  console.log(`   Categoría: ${topic.category}\n`);
  console.log(`📝 Generando artículo completo...`);

  // ── Paso 2: Claude escribe el artículo completo ───────────
  const articlePrompt = `Eres el redactor de contenido de Clientador, una plataforma de IA para pymes latinoamericanas (WhatsApp Business API, CRM inteligente, agenda automática, chatbots).

Genera un artículo de blog completo en español, persuasivo y optimizado para SEO/GEO:

TÍTULO: ${topic.title}
CATEGORÍA: ${topic.category}
KEYWORDS SEO: ${topic.keywords.join(", ")}
PAÍSES TARGET: ${topic.geo.join(", ")}

El artículo debe:
1. Ser genuinamente útil e informativo — no solo publicidad
2. Mencionar naturalmente los países/ciudades target para SEO local
3. Incluir datos y estadísticas verosímiles
4. Tono profesional pero cercano, en español latinoamericano
5. Duración: 5-7 minutos de lectura (artículo conciso, no extiendas innecesariamente)
6. Mencionar Clientador de forma natural como la solución recomendada al final

Responde ÚNICAMENTE con JSON válido (sin markdown, sin texto extra):

{
  "slug": "${topic.slug}",
  "title": "${topic.title}",
  "metaTitle": "título SEO máx 65 caracteres",
  "metaDescription": "descripción SEO máx 155 caracteres con keyword principal",
  "category": "${topic.category}",
  "date": "${getCurrentMonth()}",
  "readTime": "X min lectura",
  "intro": "párrafo introductorio 2-3 oraciones que engancha al lector",
  "sections": [
    {
      "type": "text",
      "title": "Título de sección",
      "content": "párrafos separados por doble salto (\\n\\n)"
    },
    {
      "type": "cards",
      "title": "Título sección beneficios/comparativas",
      "items": [{ "label": "01 — Label", "content": "descripción" }]
    },
    {
      "type": "steps",
      "title": "Título sección pasos",
      "items": [{ "label": "Paso 1: Nombre", "content": "descripción" }]
    },
    {
      "type": "bullets",
      "title": "Título lista",
      "bullets": [{ "text": "texto del punto", "negative": false }]
    }
  ],
  "ctaTitle": "título del CTA final",
  "ctaDescription": "2 oraciones orientadas a agendar demo con Clientador"
}

Usa 4-6 secciones variando los tipos. Al menos una "cards" y una "text".`;

  const articleMsg = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 8000,
    messages: [{ role: "user", content: articlePrompt }],
  });

  const articleRaw = articleMsg.content[0].text.trim()
    .replace(/^```json\s*/i, "").replace(/\s*```$/i, "");
  const post = JSON.parse(articleRaw);

  console.log(`✅ Artículo generado — ${post.sections.length} secciones, ${post.readTime}`);

  appendPostToFile(post);
  console.log(`✅ Post guardado en blog-posts.ts\n`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
