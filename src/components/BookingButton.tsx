"use client";

import React from "react";
import { useBookingModal } from "@/components/BookingModal";

interface BookingButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  style?: React.CSSProperties;
}

export default function BookingButton({ className, children, label, style }: BookingButtonProps) {
  const { open } = useBookingModal();
  return (
    <button onClick={open} className={className} style={style}>
      {label ?? children}
    </button>
  );
}
