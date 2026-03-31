import { portfolioData, type PortfolioData } from "@/data/portfolio";

const API_BASE_URL =
  process.env.PORTFOLIO_API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:8000";

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/portfolio`,
      process.env.NODE_ENV === "development"
        ? { cache: "no-store" }
        : { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      throw new Error(`Portfolio API failed with status ${response.status}`);
    }

    const payload = (await response.json()) as PortfolioData;
    return payload;
  } catch {
    // Fallback keeps frontend usable when backend is down.
    return portfolioData;
  }
}
