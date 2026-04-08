import { about } from "../../data/portfolioData";
import CodeLine from "../ui/CodeLine";
import SectionShell from "../ui/SectionShell";

export default function AboutSection() {
  return (
    <SectionShell id="javadoc" className="space-y-1">
      <CodeLine className="text-muted">/**</CodeLine>
      {about.lines.map((line) => (
        <CodeLine key={line} className="text-muted">
          {" * "}<span className="text-ink">{line}</span>
        </CodeLine>
      ))}
      <CodeLine className="text-muted">{" *"}</CodeLine>
      {about.tags.map((tag) => (
        <CodeLine key={tag.name} className="text-muted">
          {" * "}
          <span className="text-accent">{tag.name}</span>{" "}
          <span className="text-primary">{tag.value}</span>
        </CodeLine>
      ))}
      <CodeLine className="text-muted"> */</CodeLine>
    </SectionShell>
  );
}
