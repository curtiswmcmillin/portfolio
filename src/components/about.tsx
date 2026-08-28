import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const skillCategories = [
  {
    label: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
      "Swift / SwiftUI",
      "C# / .NET",
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      "Azure",
      "Vercel",
      "AWS",
      "Docker",
      "Microsoft Foundry",
      "RevenueCat",
      "PWA / Service Workers",
    ],
  },
  {
    label: "Data",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Supabase",
      "Entity Framework",
      "MySQL",
      "Firebase",
      "Oracle",
      "Elasticsearch",
    ],
  },
  {
    label: "AI Development",
    skills: [
      "Claude API",
      "Claude Code",
      "Claude Vision",
      "Azure OpenAI",
      "GitHub Copilot+",
      "MCP Servers",
    ],
  },
  {
    label: "Payments & Integrations",
    skills: [
      "Stripe (Subscriptions, Checkout, Webhooks, Customer Portal)",
      "Twilio",
      "SendGrid",
      "Resend",
      "Dynamics 365",
      "Box",
    ],
  },
  {
    label: "DevOps & Testing",
    skills: [
      "GitHub Actions",
      "Azure DevOps",
      "Vitest",
      "Playwright",
    ],
  },
];

const notableClients = [
  "NASA",
  "PwC",
  "Bain & Company",
  "Devon Energy",
  "LPGA",
  "Siemens",
  "Allstate",
  "Avanade",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="animate-on-scroll space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Software engineer since the early 1990s, Top-Rated Plus on
            Upwork. I&apos;ve shipped production code end-to-end —
            requirements through deployment and operations — through every
            major shift in the field: client-server, web, cloud-native, and
            now AI-integrated development.
          </p>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Today that means React, Next.js, and .NET on Azure and Vercel,
            with AI woven into the product rather than bolted on — the apps
            below include two native iOS products and a working PWA proof of
            concept, all with real AI features. I take on
            greenfield builds, rescue troubled codebases, and scale platforms
            that have outgrown their first architecture.
          </p>
        </div>

        <div className="animate-on-scroll space-y-3">
          <h3 className="text-center text-sm font-medium text-muted-foreground">
            Notable Clients
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {notableClients.map((client) => (
              <Badge key={client} variant="outline">
                {client}
              </Badge>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll space-y-6">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll flex justify-center">
          <Button
            variant="outline"
            size="lg"
            render={<a href="https://drive.google.com/file/d/1dxfc-a0bEvnicIxFUTa2y4T0wx6mtkYs/view?usp=sharing" target="_blank" rel="noopener noreferrer" />}
          >
            <ExternalLink className="size-4" data-icon="inline-start" />
            View Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
