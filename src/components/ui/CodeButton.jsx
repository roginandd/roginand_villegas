import { cn } from "../../lib/cn";

export default function CodeButton({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors duration-150 hover:text-accent",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true">-&gt;</span>
    </button>
  );
}
