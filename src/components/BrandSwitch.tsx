"use client";

import { BRANDS, type BrandId } from "@/lib/prices";

/**
 * Выбор телефона. Один компонент для розового поля первого экрана и для прайса,
 * чтобы выбор выглядел и вёл себя одинаково.
 */
export function BrandSwitch({
  value,
  onChange,
  name,
  tone = "paper",
  label = "Телефон",
}: {
  value: BrandId;
  onChange: (brand: BrandId) => void;
  name: string;
  tone?: "paper" | "esd";
  label?: string;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">{label}</legend>
      <div
        className={`no-scrollbar flex gap-0.5 overflow-x-auto rounded-[10px] p-1 sm:gap-1 ${
          tone === "esd" ? "bg-white/45 ring-1 ring-ink/10" : "bg-white ring-1 ring-line"
        }`}
      >
        {BRANDS.map((brand) => {
          const checked = brand.id === value;
          return (
            <label
              key={brand.id}
              className={`relative flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-[7px] px-1 text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-1 has-[:focus-visible]:outline-ink max-[380px]:px-0.5 max-[380px]:text-[12px] sm:px-3 sm:text-sm ${
                checked ? "bg-ink text-white" : "text-ink/75 hover:text-ink"
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
