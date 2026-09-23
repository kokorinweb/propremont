"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { BrandId } from "@/lib/prices";
import { DIAGNOSTICS, type BrandChoice, type ServiceChoice } from "@/lib/request";

type Booking = {
  /** Телефон, который сейчас показан в консоли и прайсе. */
  brand: BrandId;
  /** Выбор для формы. Пусто, пока посетитель сам не выбрал телефон. */
  formBrand: BrandChoice | "";
  formService: ServiceChoice;
  selectBrand: (brand: BrandId) => void;
  setFormBrand: (brand: BrandChoice | "") => void;
  setFormService: (service: ServiceChoice) => void;
  /** Переносит выбранный ремонт в форму и ведёт к ней. */
  book: (service: ServiceChoice) => void;
};

const BookingContext = createContext<Booking | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<BrandId>("apple");
  const [formBrand, setFormBrand] = useState<BrandChoice | "">("");
  const [formService, setFormService] = useState<ServiceChoice>(DIAGNOSTICS.id);

  // Один телефон на всю страницу: выбрал в консоли — прайс и форма уже про него.
  const selectBrand = useCallback((next: BrandId) => {
    setBrand(next);
    setFormBrand(next);
  }, []);

  const book = useCallback(
    (service: ServiceChoice) => {
      setFormBrand(brand);
      setFormService(service);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      document.getElementById("booking")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      // Фокус после прокрутки, иначе браузер дёрнет страницу к полю раньше времени.
      window.setTimeout(() => document.getElementById("booking-name")?.focus({ preventScroll: true }), reduce ? 0 : 450);
    },
    [brand],
  );

  const value = useMemo(
    () => ({ brand, formBrand, formService, selectBrand, setFormBrand, setFormService, book }),
    [brand, formBrand, formService, selectBrand, book],
  );

  return <BookingContext value={value}>{children}</BookingContext>;
}

export function useBooking(): Booking {
  const value = useContext(BookingContext);
  if (!value) throw new Error("useBooking вне BookingProvider");
  return value;
}
