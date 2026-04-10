import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const skillCategories = [
  {
    label: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript",
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
            Senior full-stack engineer with 8,000+ delivered hours and a
            Top-Rated Plus rating on Upwork. I&apos;ve continuously adapted
            across every major platform shift — from client-server through
            cloud-native and AI-integrated development — while staying
            hands-on, shipping production code, and owning the full lifecycle
            from requirements through deployment and operations.
          </p>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Currently specializing in React, Next.js, Angular, and .NET on
            Azure and Vercel, with deep experience integrating AI into
            production products. Equally comfortable building greenfield SaaS
            from scratch, rescuing struggling codebases, or scaling existing
            platforms.
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
