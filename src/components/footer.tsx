import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <a
            href="mailto:curtis@cloud-first-consulting.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://linkedin.com/in/curtismcmillin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href="https://github.com/curtismcmillin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Curtis McMillin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
