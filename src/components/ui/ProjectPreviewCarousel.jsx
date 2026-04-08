import { useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/cn";

function CarouselNavButton({ direction, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-outline px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-colors duration-150 hover:border-primary hover:text-accent"
    >
      {direction === "previous" ? "< " : ""}
      {children}
      {direction === "next" ? " >" : ""}
    </button>
  );
}

export default function ProjectPreviewCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [slides]);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex, slides]);

  const goPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="space-y-3">
      <p className="font-mono text-xs text-muted">{activeSlide.fileLabel}</p>

      <div className="border border-outline bg-panel">
        <div className="flex items-center justify-between gap-3 border-b border-outline px-3 py-2">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
            {activeSlide.windowTitle}
          </p>
          <p className="font-mono text-[0.7rem] text-accent">{activeSlide.annotation}</p>
        </div>

        <div className="space-y-5 p-4 md:p-5">
          <div className="border border-outline bg-surface p-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              activePreview();
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-technical text-ink">
              {activeSlide.headline}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              {activeSlide.description}
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
            <div className="border border-outline bg-surface px-4 py-4">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                implementation.log
              </p>
              <div className="mt-4 space-y-2">
                {activeSlide.rows.map((row, index) => (
                  <div
                    key={row}
                    className="flex items-start gap-3 border-b border-outline/70 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-muted">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-mono text-sm text-primary">{row}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-outline bg-surface px-4 py-4">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                runtime.state
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeSlide.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="border border-outline bg-panel px-2 py-1 font-mono text-xs text-primary"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border border-outline px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <CarouselNavButton direction="previous" onClick={goPrevious}>
            previous()
          </CarouselNavButton>
          <CarouselNavButton direction="next" onClick={goNext}>
            next()
          </CarouselNavButton>
        </div>

        <div className="flex flex-wrap gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.fileLabel}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-3 w-3 border border-outline transition-colors duration-150",
                index === activeIndex ? "bg-primary border-primary" : "bg-surface",
              )}
              aria-label={`Go to preview ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
