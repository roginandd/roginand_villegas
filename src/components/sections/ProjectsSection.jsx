import { useState } from "react";
import { projects } from "../../data/portfolioData";
import EndpointCard from "../ui/EndpointCard";
import CodeLine from "../ui/CodeLine";
import ProjectDetailModal from "../ui/ProjectDetailModal";
import SectionShell from "../ui/SectionShell";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SectionShell id="endpoints" className="space-y-12">
        <CodeLine className="text-sm text-muted">// === PROJECT ENDPOINTS ===</CodeLine>

        <div className="space-y-16">
          {projects.map((project) => (
            <EndpointCard
              key={project.slug}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <CodeLine className="text-xs italic text-muted">
          // Open a project card to inspect the deeper implementation context.
        </CodeLine>
      </SectionShell>

      {selectedProject ? (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </>
  );
}
