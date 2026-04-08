import { contact, footer } from "../../data/portfolioData";

export default function Footer() {
  const footerLinks = contact.fields.filter((field) => field.href);

  return (
    <footer className="border-t border-outline bg-surface">
      <div className="mx-auto flex max-w-artifact flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-primary">
          {footer.closingLine}
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((field) => (
            <a
              key={field.name}
              href={field.href}
              className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted transition-colors duration-150 hover:text-accent"
              target={field.href.startsWith("http") ? "_blank" : undefined}
              rel={field.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {field.name}
            </a>
          ))}
        </div>

        <div className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted">
          {footer.statusLine}
        </div>
      </div>
    </footer>
  );
}
