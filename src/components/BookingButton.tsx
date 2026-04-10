"use client";

import { useBookingModal } from "@/components/BookingModal";

interface BookingButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function BookingButton({ className, children }: BookingButtonProps) {
  const { open } = useBookingModal();
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
