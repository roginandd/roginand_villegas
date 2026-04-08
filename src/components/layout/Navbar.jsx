import { navigationItems, profile } from "../../data/portfolioData";
import { useActiveSection } from "../../hooks/useActiveSection";
import { cn } from "../../lib/cn";

export default function Navbar() {
  const activeSection = useActiveSection(navigationItems.map((item) => item.id));

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-outline bg-surface">
      <div className="mx-auto flex h-auto max-w-artifact flex-col gap-3 px-5 py-3 md:h-14 md:flex-row md:items-center md:justify-between md:px-6 md:py-0">
        <div className="font-mono text-sm font-bold text-primary">
          {profile.fileLabel}
        </div>

        <div className="flex gap-2 overflow-x-auto font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "border-b border-transparent px-2 py-1 transition-colors duration-150 hover:text-primary",
                  isActive && "border-primary text-primary",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
