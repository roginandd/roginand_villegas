import CodeButton from "./CodeButton";
import CodeLink from "./CodeLink";
import CodeLine from "./CodeLine";

export default function EndpointCard({ project, onOpen }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(project);
    }
  };

  return (
    <article className="space-y-3">
      <div className="space-y-1">
        <CodeLine className="text-xs text-accent">
          @GetMapping(<span className="text-primary">"{project.endpoint}"</span>)
        </CodeLine>
        <CodeLine className="text-xs text-muted">
          @Status(<span className="text-primary">"{project.status}"</span>)
        </CodeLine>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={handleKeyDown}
        className="cursor-pointer border border-outline px-5 py-6 transition-colors duration-150 hover:border-primary hover:bg-panel/40 focus-visible:border-primary focus-visible:outline-none md:px-6 md:py-7"
      >
        <h3 className="font-display text-2xl font-bold uppercase tracking-technical text-ink md:text-[1.9rem]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          {project.summary}
        </p>

        <div className="mt-6 space-y-2 border-t border-outline pt-5">
          <CodeLine className="text-xs text-muted">
            private final String[] stack = {"{"}
          </CodeLine>
          <CodeLine className="text-sm text-primary">
            {project.stack.map((item) => `"${item}"`).join(", ")}
          </CodeLine>
          <CodeLine className="text-xs text-muted">{"};"}</CodeLine>
        </div>

        {project.notes ? (
          <CodeLine className="mt-4 text-xs italic text-muted">
            // {project.notes}
          </CodeLine>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-outline pt-5">
          <CodeButton onClick={() => onOpen(project)}>openProjectDetail()</CodeButton>

          {project.sourceUrl || project.liveUrl ? (
            <>
            {project.sourceUrl ? (
              <CodeLink
                href={project.sourceUrl}
                onClick={(event) => event.stopPropagation()}
              >
                viewSource()
              </CodeLink>
            ) : null}
            {project.liveUrl ? (
              <CodeLink
                href={project.liveUrl}
                onClick={(event) => event.stopPropagation()}
              >
                openLive()
              </CodeLink>
            ) : null}
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
