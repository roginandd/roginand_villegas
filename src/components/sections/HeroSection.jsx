import developerPreview from "../../assets/me/me.jpg";
import resumePdf from "../../assets/resume/Villegas, Roginand - Resume.pdf";
import { profile } from "../../data/portfolioData";
import CodeButton from "../ui/CodeButton";
import CodeLine from "../ui/CodeLine";
import CodeLink from "../ui/CodeLink";
import SectionShell from "../ui/SectionShell";

export default function HeroSection() {
  const [firstName, lastName] = profile.name.split(" ");
  const getResume = () => {
  window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  return (
    <SectionShell as="header" id="source" className="space-y-10">
      <div className="space-y-1">
        <CodeLine className="text-accent">@RestController</CodeLine>
        <CodeLine className="text-accent">
          @RequestMapping(<span className="text-primary">"{profile.requestMapping}"</span>)
        </CodeLine>
        <CodeLine className="text-ink">
          public class <span className="text-primary">{profile.className}</span> {"{"}
          <span
            aria-hidden="true"
            className="ml-2 inline-block h-4 w-2 translate-y-[2px] bg-primary align-middle animate-blink"
          />
        </CodeLine>
      </div>

      <div className="space-y-6">
        <h1 className="sr-only">{profile.name}</h1>

        <div
          aria-hidden="true"
          className="grid gap-x-6 gap-y-4 md:grid-cols-[minmax(0,1fr)_260px] md:grid-rows-[minmax(0,1fr)_260px] md:items-start"
        >
          <p className="font-sans text-5xl font-extrabold uppercase leading-none tracking-technical text-ink sm:text-6xl md:col-start-1 md:row-start-1 md:text-7xl">
            {firstName}
              <p className="font-sans text-5xl font-extrabold uppercase leading-none tracking-technical text-ink sm:text-6xl md:col-start-1 md:row-start-2 md:text-7xl">
            <span className="text-accent">{lastName.charAt(0)}</span>
            {lastName.slice(1)}
          </p>
          </p>
          
        <div className="flex flex-wrap items-center gap-x-4 gap-y-20">
           <p className="font-mono text-sm text-muted">
            // {profile.role} · {profile.school} · {profile.location}
          </p>
          <div className="border border-outline px-3 py-1 font-mono text-xs text-ink">
            "{profile.statusMessage}"
          </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <CodeButton onClick={getResume}>getResume()</CodeButton>
              <CodeLink href="#endpoints">getProjects()</CodeLink>
              <CodeLink href="#contact">contact()</CodeLink>
            </div>
        </div>
        
          
            
          <figure className="space-y-10 md:col-start-2 md:row-start-1 md:row-span-2 md:self-start">
            <CodeLine className="text-xs  text-muted">// me.jpg</CodeLine>
            <div className="border border-outline bg-panel p-3">
              <img
                src={developerPreview}
                alt="Portrait of Roginand Villegas seated in a cafe"
                className="block aspect-square w-full border border-outline bg-surface object-cover md:w-[260px]"
              />
            </div>
           
          </figure>

        </div>
      </div>


    
    </SectionShell>
  );
}
