import { cn } from "../../lib/cn";

function isExternalLink(href) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export default function CodeLink({ href, className, children }) {
  const external = isExternalLink(href);

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors duration-150 hover:text-accent",
        className,
      )}
      target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
      rel={external && !href.startsWith("mailto:") ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}
