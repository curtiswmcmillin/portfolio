export interface Project {
  name: string;
  slug: string;
  tagline: string;
  url: string;
  color: string; // Tailwind color class prefix
  colorHex: string; // For CSS custom properties
  description: string;
  features: string[];
  techHighlights: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "FirstCut",
    slug: "firstcut",
    tagline: "Native iOS golf scorecard",
    url: "https://firstcutgolf.app",
    color: "emerald",
    colorHex: "oklch(0.596 0.145 163.225)",
    description:
      "A free native iPhone app for golfers to search 30,000+ courses and score rounds in real time. A Next.js backend hosts the public site, account controls, and AI routes for scorecard OCR, a USGA rules assistant, and coaching.",
    features: [
      "Native iOS round scoring with real-time stats",
      "Offline-capable scoring with crash recovery",
      "AI scorecard scanning via Claude Vision OCR",
      "USGA rules assistant powered by Claude",
      "Course search across 30K+ courses",
      "Free to use — no subscriptions or in-app purchases",
    ],
    techHighlights: [
      "Shared round reducer ported to Swift for native scoring parity",
      "Claude Vision integration for OCR scorecard parsing",
      "SwiftUI app with a Next.js + Supabase backend",
      "Crash recovery via local persistence",
    ],
    stack: [
      "Swift",
      "SwiftUI",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Claude Vision",
      "GolfCourseAPI",
    ],
  },
  {
    name: "Wrench",
    slug: "wrench",
    tagline: "Native iOS motorcycle maintenance tracker",
    url: "https://wrench-log.com",
    color: "orange",
    colorHex: "oklch(0.705 0.213 47.604)",
    description:
      "A native iPhone app that generates AI-powered maintenance schedules, logs services, decodes VINs, checks for recalls, and provides market valuations — with a Next.js backend and App Store billing via RevenueCat.",
    features: [
      "AI-generated maintenance schedules per bike",
      "Photo bike identification via Claude Vision",
      "VIN decode and NHTSA recall lookup",
      "Service logging with CSV import/export",
      "Market valuation estimates",
      "Pro subscriptions via Apple in-app purchase",
    ],
    techHighlights: [
      "Claude Vision for photo-based motorcycle identification",
      "Multi-API orchestration (NHTSA + API Ninjas)",
      "Status calculation engine shared between TypeScript and Swift",
      "RevenueCat billing with App Store in-app purchase",
    ],
    stack: [
      "Swift",
      "SwiftUI",
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "RevenueCat",
      "Claude Vision",
      "NHTSA API",
    ],
  },
  {
    name: "RenoLedger",
    slug: "renoledger",
    tagline: "Working PWA proof of concept for renovation planning",
    url: "https://renoledger.com",
    color: "blue",
    colorHex: "oklch(0.623 0.214 259.815)",
    description:
      "A working progressive web app proof of concept for renovation planning — AI cost estimation, contractor discovery, budget optimization, material comparison, and DIY assessment. Not a shipped product yet, but the core flows run end to end.",
    features: [
      "Installable PWA with offline-capable service worker",
      "AI chat assistant per project for planning",
      "Bulk AI operations for cost estimation",
      "Yelp Fusion contractor search integration",
      "YouTube tutorial integration for DIY tasks",
      "CSV import for existing budgets",
    ],
    techHighlights: [
      "Azure OpenAI integration (not Anthropic) demonstrating multi-provider AI",
      "Multi-AI-feature architecture with chat, bulk ops, and estimation",
      "Serwist service worker for PWA install and offline support",
      "Resend transactional email for notifications",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Stripe",
      "Azure OpenAI",
      "Serwist PWA",
      "Yelp Fusion",
      "Resend",
    ],
  },
];
