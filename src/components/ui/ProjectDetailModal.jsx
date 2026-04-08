import { useEffect } from "react";
import { createPortal } from "react-dom";
import CodeButton from "./CodeButton";
import CodeLine from "./CodeLine";
import CodeLink from "./CodeLink";
import CodePill from "./CodePill";
import ProjectPreviewCarousel from "./ProjectPreviewCarousel";

function MetadataField({ label, value, href }) {
  return (
    <div className="border border-outline px-3 py-3">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="mt-2 inline-flex text-sm leading-6 text-primary transition-colors duration-150 hover:text-accent"
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-sm leading-6 text-ink">{value}</p>
      )}
    </div>
  );
}

function MethodBlock({ signature, children }) {
  return (
    <section className="space-y-3">
      <CodeLine className="text-ink">
        {signature} {"{"}
      </CodeLine>
      <div className="border-l border-outline pl-4 md:pl-5">{children}</div>
      <CodeLine className="text-ink">{"}"}</CodeLine>
    </section>
  );
}

function ContributionsBlock({ items }) {
  return (
    <div className="space-y-2 border border-outline bg-panel px-4 py-4 font-mono text-sm leading-7 text-ink">
      <p className="text-primary">return List.of(</p>
      {items.map((item, index) => (
        <p key={item} className="break-words pl-4">
          <span className="text-primary">"{item}"</span>
          {index < items.length - 1 ? "," : ""}
        </p>
      ))}
      <p className="text-primary">);</p>
    </div>
  );
}

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-ink/20 px-4 py-4 animate-backdrop-in md:px-6 md:py-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex min-h-full items-start justify-center">
        <div className="flex w-full max-w-modal max-h-[calc(100vh-2rem)] flex-col animate-panel-in border border-outline bg-surface md:max-h-[calc(100vh-4rem)]">
          <div className="shrink-0 border-b border-outline px-4 py-4 md:px-6 md:py-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <CodeLine className="text-accent">@ProjectDetail</CodeLine>
                <CodeLine className="text-accent">
                  @Path(
                  <span className="text-primary">"{project.endpoint}"</span>)
                </CodeLine>
                <CodeLine className="text-ink">
                  public class{" "}
                  <span className="text-primary">{project.className}</span>{" "}
                  {"{"}
                </CodeLine>
                <CodeLine className="text-xs text-muted">
                  @Status(
                  <span className="text-primary">"{project.status}"</span>)
                </CodeLine>
              </div>

              <CodeButton className="shrink-0" onClick={onClose}>
                closeModal()
              </CodeButton>
            </div>
          </div>

          <div className="modal-scroll min-h-0 flex-1 overflow-y-auto">
            <div className="space-y-8 px-4 py-5 md:px-6 md:py-6">
              <section className="space-y-4 border-b border-outline pb-8">
                <div className="space-y-3">
                  <CodeLine className="text-xs uppercase tracking-[0.18em] text-muted">
                    // {project.projectComment}
                  </CodeLine>
                  <h2 className="font-display text-3xl font-bold uppercase tracking-technical text-ink md:text-4xl">
                    {project.title}
                  </h2>
                  <p className="max-w-4xl text-base leading-7 text-muted">
                    {project.summary}
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                  <MetadataField label="Built For" value={project.builtFor} />
                  <MetadataField
                    label="Project Type"
                    value={project.projectType}
                  />
                  <MetadataField
                    label="Stack"
                    value={project.stack.join(" • ")}
                  />
                  <MetadataField
                    label="Live Link"
                    value={project.liveUrl ?? "source preview only"}
                    href={project.liveUrl ?? undefined}
                  />
                </div>
              </section>

              <section className="space-y-3 border-b border-outline pb-8">
                <ProjectPreviewCarousel slides={project.gallery} />
              </section>

              <div className="space-y-10">
                <MethodBlock signature="private String overview()">
                  <p className="max-w-3xl text-base leading-7 text-muted">
                    {project.overview}
                  </p>
                </MethodBlock>

                <MethodBlock signature="private String projectStory()">
                  <p className="max-w-3xl text-base leading-7 text-muted">
                    {project.story}
                  </p>
                </MethodBlock>

                <MethodBlock signature="private List<String> contributions()">
                  <ContributionsBlock items={project.contributions} />
                </MethodBlock>

                <MethodBlock signature="private TechHighlights highlights()">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <CodePill key={item} className="text-primary">
                        {item}
                      </CodePill>
                    ))}
                  </div>
                </MethodBlock>

                <div className="space-y-3 border-t border-outline pt-6">
                  <CodeLine className="text-sm text-muted">
                    // navigation
                  </CodeLine>
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {project.liveUrl ? (
                      <CodeLink href={project.liveUrl}>openLiveDemo()</CodeLink>
                    ) : null}
                    {project.sourceUrl ? (
                      <CodeLink href={project.sourceUrl}>
                        viewRepository()
                      </CodeLink>
                    ) : null}
                    <CodeButton onClick={onClose}>closeModal()</CodeButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-outline px-4 py-3 md:px-6">
            <CodeLine className="text-[0.7rem] uppercase tracking-[0.22em] text-primary">
              {"} // end "}
              {project.className}.java
            </CodeLine>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
