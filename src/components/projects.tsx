import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground">
            Four production applications — each with AI integration, Stripe
            billing, and real users.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
