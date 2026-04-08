import { cn } from "../../lib/cn";

export default function CodePill({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex border border-outline bg-panel px-3 py-1 font-mono text-sm text-ink transition-colors duration-150 hover:border-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
