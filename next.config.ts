import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Иконки импортируются из «бочки» lucide-react — Next превратит их в точечные импорты.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
