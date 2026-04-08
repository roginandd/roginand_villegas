import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const resolveHashSection = () => {
    const currentHash = window.location.hash.replace("#", "");
    return sectionIds.includes(currentHash) ? currentHash : null;
  };

  const [activeSection, setActiveSection] = useState(
    () => resolveHashSection() ?? sectionIds[0] ?? "",
  );

  useEffect(() => {
    const syncFromHash = () => {
      const nextSection = resolveHashSection();

      if (nextSection) {
        setActiveSection(nextSection);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [sectionIds]);

  useEffect(() => {
    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top) -
              Math.abs(right.boundingClientRect.top),
          );

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: [0, 0.08, 0.2],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
