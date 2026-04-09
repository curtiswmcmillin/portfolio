import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "REST APIs", "Supabase (PostgreSQL + Auth)"],
  },
  {
    label: "AI / ML",
    skills: ["Anthropic Claude (Vision + Chat)", "Azure OpenAI"],
  },
  {
    label: "Payments",
    skills: ["Stripe Subscriptions", "Checkout", "Webhooks", "Customer Portal"],
  },
  {
    label: "Infrastructure",
    skills: ["Vercel", "PWA / Service Workers", "Offline Sync"],
  },
  {
    label: "Testing",
    skills: ["Vitest", "Playwright"],
  },
  {
    label: "APIs",
    skills: ["NHTSA", "Yelp Fusion", "YouTube Data", "API Ninjas"],
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="animate-on-scroll space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Full-stack software engineer focused on building production-ready
            applications with modern web technologies. I specialize in Next.js,
            AI integration, and offline-first progressive web apps — taking
            projects from initial architecture through deployment and billing.
          </p>
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
