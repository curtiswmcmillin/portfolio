import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollObserver } from "@/components/scroll-observer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloud-first-consulting.com"),
  title: "Curtis McMillin — Full-Stack Software Engineer",
  description:
    "Freelance software engineer building production SaaS applications with Next.js, React, TypeScript, Supabase, Stripe, and AI integration (Claude, OpenAI). Specializing in offline-first PWAs and full-stack development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Curtis McMillin — Full-Stack Software Engineer",
    description:
      "Freelance software engineer building production SaaS applications with Next.js, Supabase, Stripe, and AI integration.",
    url: "https://cloud-first-consulting.com",
    siteName: "Curtis McMillin",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Curtis McMillin — Full-Stack Software Engineer",
    description:
      "Freelance software engineer building production SaaS applications with Next.js, Supabase, Stripe, and AI integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <ThemeProvider>
          <header className="fixed top-0 right-0 z-50 p-4">
            <ThemeToggle />
          </header>
          <ScrollObserver />
          <main className="flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
