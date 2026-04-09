"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className="animate-on-scroll transition-shadow hover:shadow-lg"
      style={
        {
          "--project-color": project.colorHex,
        } as React.CSSProperties
      }
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold">
              <span
                className="mr-2 inline-block size-3 rounded-full"
                style={{ backgroundColor: project.colorHex }}
                aria-hidden="true"
              />
              {project.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {project.tagline}
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            render={
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Live
            <ExternalLink className="size-3" data-icon="inline-end" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {expanded ? "Less" : "More"} details
          <ChevronDown
            className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        {expanded && (
          <div className="animate-fade-in space-y-4 border-t pt-4">
            <div>
              <h4 className="mb-2 text-sm font-medium">Key Features</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span
                      className="mt-2 block size-1 shrink-0 rounded-full"
                      style={{ backgroundColor: project.colorHex }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">Tech Highlights</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {project.techHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span
                      className="mt-2 block size-1 shrink-0 rounded-full"
                      style={{ backgroundColor: project.colorHex }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
