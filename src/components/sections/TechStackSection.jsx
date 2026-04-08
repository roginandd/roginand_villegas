import { techStack } from "../../data/portfolioData";
import CodeLine from "../ui/CodeLine";
import SectionShell from "../ui/SectionShell";
import StackGroup from "../ui/StackGroup";

export default function TechStackSection() {
  return (
    <SectionShell id="config">
      <div className="space-y-1">
        <CodeLine className="text-accent">@Bean @Configuration</CodeLine>
        <CodeLine className="text-ink">public TechStack configureStack() {"{"}</CodeLine>
      </div>

      <div className="space-y-8 border-l border-outline pl-6 md:pl-8">
        {techStack.map((group) => (
          <StackGroup
            key={group.label}
            declaration={group.declaration}
            items={group.items}
          />
        ))}
      </div>

      <CodeLine className="text-ink">{"}"}</CodeLine>
    </SectionShell>
  );
}
