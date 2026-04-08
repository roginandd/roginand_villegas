import { contact } from "../../data/portfolioData";
import CodeLine from "../ui/CodeLine";
import SectionShell from "../ui/SectionShell";

export default function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="space-y-1">
        <CodeLine className="text-accent">{contact.declaration}</CodeLine>
        <CodeLine className="text-ink">{contact.methodSignature}</CodeLine>
      </div>

      <div className="space-y-2 border-l border-outline pl-6 md:pl-8">
        {contact.fields.map((field) => (
          <CodeLine key={field.name} className="text-ink">
            <span className="text-muted">{field.type}</span>{" "}
            {field.name} ={" "}
            {field.href ? (
              <a
                href={field.href}
                className="text-primary transition-colors duration-150 hover:text-accent"
                target={field.href.startsWith("http") ? "_blank" : undefined}
                rel={field.href.startsWith("http") ? "noreferrer" : undefined}
              >
                "{field.value}"
              </a>
            ) : (
              <span className="text-primary">"{field.value}"</span>
            )}
            ;
          </CodeLine>
        ))}

        <CodeLine className="pt-6 text-xs italic text-muted">
          // Email is the fastest path for internship and entry-level backend roles.
        </CodeLine>
        <CodeLine className="text-accent">{contact.returnLine}</CodeLine>
      </div>

      <CodeLine className="text-ink">{"}"}</CodeLine>
    </SectionShell>
  );
}
