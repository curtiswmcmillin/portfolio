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
    name: "Birdie",
    slug: "birdie",
    tagline: "Golf scoring PWA with AI scorecard scanning",
    url: "https://birdie-score.com",
    color: "emerald",
    colorHex: "oklch(0.596 0.145 163.225)",
    description:
      "A progressive web app for golfers to search 30,000+ courses, score rounds in real-time, scan paper scorecards with AI-powered OCR, and get instant USGA rules answers from an AI assistant.",
    features: [
      "Multi-player round scoring with real-time stats",
      "Offline-capable PWA with crash recovery",
      "AI scorecard scanning via Claude Vision OCR",
      "Freemium subscription billing with Stripe",
      "USGA rules assistant powered by Claude",
      "Course search across 30K+ courses",
    ],
    techHighlights: [
      "Complex state machine (roundReducer) managing multi-player round lifecycle",
      "Claude Vision integration for OCR scorecard parsing",
      "Serwist service worker for offline-first experience",
      "Crash recovery via localStorage persistence",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Stripe",
      "Claude Vision",
      "Serwist PWA",
    ],
  },
  {
    name: "Wrench",
    slug: "wrench",
    tagline: "Motorcycle maintenance tracker with AI-generated schedules",
    url: "https://wrench-log.com",
    color: "orange",
    colorHex: "oklch(0.705 0.213 47.604)",
    description:
      "An intelligent motorcycle maintenance tracker that generates AI-powered maintenance schedules, logs services, decodes VINs, checks for recalls, and provides market valuations.",
    features: [
      "AI-generated maintenance schedules per bike",
      "Photo bike identification via Claude Vision",
      "VIN decode and NHTSA recall lookup",
      "Service logging with CSV import/export",
      "Market valuation estimates",
      "Admin dashboard with user management",
    ],
    techHighlights: [
      "Claude Vision for photo-based motorcycle identification",
      "Multi-API orchestration (NHTSA + API Ninjas + GolfCourseAPI)",
      "Status calculation engine for maintenance intervals",
      "Admin dashboard with analytics and user management",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Stripe",
      "Claude Vision",
      "NHTSA API",
    ],
  },
  {
    name: "RenoLedger",
    slug: "renoledger",
    tagline: "AI-powered renovation planner and budget optimizer",
    url: "https://renoledger.com",
    color: "blue",
    colorHex: "oklch(0.623 0.214 259.815)",
    description:
      "A comprehensive renovation planning tool with AI cost estimation, contractor discovery, budget optimization, material comparison, and DIY assessment for home improvement projects.",
    features: [
      "AI chat assistant per project for planning",
      "Bulk AI operations for cost estimation",
      "Yelp Fusion contractor search integration",
      "YouTube tutorial integration for DIY tasks",
      "CSV import for existing budgets",
      "Complex admin with user management",
    ],
    techHighlights: [
      "Azure OpenAI integration (not Anthropic) demonstrating multi-provider AI",
      "Multi-AI-feature architecture with chat, bulk ops, and estimation",
      "Resend transactional email for notifications",
      "Complex admin dashboard with user management and analytics",
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
      "Yelp Fusion",
      "Resend",
    ],
  },
  {
    name: "HitSet",
    slug: "hitset",
    tagline: "Strength training PWA with offline sync and equipment scanning",
    url: "https://hit-set.com",
    color: "violet",
    colorHex: "oklch(0.606 0.25 292.717)",
    description:
      "A progressive web app for strength training that tracks workouts, calculates progressive overload, scans gym equipment with AI vision, and remembers machine settings across multiple gyms.",
    features: [
      "Workout session tracking with crash recovery",
      "Offline-first with background sync queue",
      "Equipment identification via Claude Vision",
      "Multi-gym machine settings memory",
      "Progressive overload algorithm",
      "Exercise library with custom exercises",
    ],
    techHighlights: [
      "Complex workout reducer managing session lifecycle and crash recovery",
      "Offline-first architecture with sync queue for eventual consistency",
      "Claude Vision for gym equipment scanning and identification",
      "Progressive overload algorithm analyzing historical performance data",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Stripe",
      "Claude Vision",
      "Serwist PWA",
    ],
  },
];
