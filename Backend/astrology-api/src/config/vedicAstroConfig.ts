export const vedicAstroConfig = {
  baseURL: process.env.VEDIC_ASTRO_BASE_URL || "https://api.freeastroapi.com/api/v1",
  apiKey: process.env.VEDIC_ASTRO_API_KEY || "",
  timeout: 15000,
  endpoints: {
    vedicCalculate: "/vedic/calculate", // Full chart: planets, houses, nakshatra, dasha, sade sati
    vedicChart:     "/vedic/chart",     // Same but without dasha/sade sati
    vedicDasha:     "/vedic/dasha",     // Dasha periods with sub-periods
  },
} as const;
