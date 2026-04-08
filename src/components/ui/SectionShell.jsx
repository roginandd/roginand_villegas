import { cn } from "../../lib/cn";

export default function SectionShell({ as: Component = "section", className, id, children }) {
  return (
    <Component
      id={id}
      className={cn("scroll-mt-24 space-y-8", className)}
    >
      {children}
    </Component>
  );
}
