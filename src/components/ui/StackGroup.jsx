import CodeLine from "./CodeLine";
import CodePill from "./CodePill";

export default function StackGroup({ declaration, items }) {
  return (
    <div className="space-y-3">
      <CodeLine className="text-xs text-muted">
        {declaration} = {"{"}
      </CodeLine>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <CodePill key={item} className="text-sm text-primary">
            "{item}"
          </CodePill>
        ))}
      </div>
      <CodeLine className="text-xs text-muted">{"};"}</CodeLine>
    </div>
  );
}
