import { Mail, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="animate-fade-in space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Curtis McMillin
        </h1>
        <p className="text-xl text-muted-foreground sm:text-2xl">
          Software Engineer
        </p>
        <p className="mx-auto max-w-xl text-base text-muted-foreground/80">
          Building full-stack applications with AI integration, offline-first
          PWAs, and subscription billing — from concept to production.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Button
            variant="ghost"
            size="icon"
            render={
              <a
                href="https://github.com/curtiswmcmillin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              />
            }
          >
            <GitHubIcon className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            render={
              <a
                href="https://linkedin.com/in/curtismcmillin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              />
            }
          >
            <LinkedInIcon className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            render={
              <a
                href="https://www.upwork.com/freelancers/curtiswmcmillin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
              />
            }
          >
            <UpworkIcon className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            render={
              <a
                href="mailto:curtis@cloud-first-consulting.com"
                aria-label="Email"
              />
            }
          >
            <Mail className="size-5" />
          </Button>
        </div>

        <div className="pt-4">
          <Button
            variant="outline"
            size="lg"
            render={<a href="#projects" />}
          >
            View Projects
            <ChevronDown className="size-4" data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="size-5 text-muted-foreground/50" />
      </div>
    </section>
  );
}
