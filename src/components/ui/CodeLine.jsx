import { cn } from "../../lib/cn";

export default function CodeLine({ as: Component = "p", className, children }) {
  return (
    <div className="code-scroll overflow-x-auto">
      <Component className={cn("min-w-max font-mono text-sm leading-7", className)}>
        {children}
      </Component>
    </div>
  );
}
