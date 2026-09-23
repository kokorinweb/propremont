"use client";

import { BRANDS, type BrandId } from "@/lib/prices";

/**
 * Сегментный переключатель телефона. Один компонент для консоли (тёмный экран)
 * и прайса (светлый лист), чтобы выбор выглядел и вёл себя одинаково.
 */
export function BrandSwitch({
  value,
  onChange,
  name,
  tone = "light",
  label = "Телефон",
}: {
  value: BrandId;
  onChange: (brand: BrandId) => void;
  name: string;
  tone?: "light" | "dark";
  label?: string;
}) {
  const dark = tone === "dark";
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">{label}</legend>
      <div
        className={`no-scrollbar flex gap-0.5 overflow-x-auto rounded-full p-1 sm:gap-1 ${
          dark ? "bg-brand-deep/70 ring-1 ring-screen-line" : "bg-mist ring-1 ring-line"
        }`}
      >
        {BRANDS.map((brand) => {
          const checked = brand.id === value;
          return (
            <label
              key={brand.id}
              className={`relative flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full px-1 text-[12.5px] font-medium whitespace-nowrap max-[380px]:px-0.5 max-[380px]:text-[12px] sm:px-3.5 sm:text-sm transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 ${
                dark
                  ? `has-[:focus-visible]:outline-mint ${checked ? "bg-screen-ink text-brand-deep" : "text-screen-soft hover:text-screen-ink"}`
                  : `has-[:focus-visible]:outline-brand ${checked ? "bg-brand text-white" : "text-ink-soft hover:text-ink"}`
              }`}
            >
              <input
                type="radio"
                name={name}
                value={brand.id}
                checked={checked}
                onChange={() => onChange(brand.id)}
                className="sr-only"
              />
              {brand.name}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
