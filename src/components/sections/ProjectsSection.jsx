import { projects } from "../../data/portfolioData";
import EndpointCard from "../ui/EndpointCard";
import CodeLine from "../ui/CodeLine";
import SectionShell from "../ui/SectionShell";

export default function ProjectsSection() {
  return (
    <SectionShell id="endpoints" className="space-y-12">
      <CodeLine className="text-sm text-muted">// === PROJECT ENDPOINTS ===</CodeLine>

      <div className="space-y-16">
        {projects.map((project) => (
          <EndpointCard key={project.slug} project={project} />
        ))}
      </div>

      <CodeLine className="text-xs italic text-muted">
        // Public links are attached only when a source repository or live deployment could be verified.
      </CodeLine>
    </SectionShell>
  );
}
