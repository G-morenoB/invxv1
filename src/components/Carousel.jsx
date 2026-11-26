import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SectionContext } from "./SectionContext";

const GAP = 16; // px entre fotos (debe coincidir con gap-4)

/**
 * Carrusel con deslizamiento táctil (scroll-snap), flechas, puntos y avance automático.
 *  items      : array de nodos (cada uno es una diapositiva)
 *  autoplayMs : 0 para desactivar el avance automático
 */
export default function Carousel({ items, autoplayMs = 4500 }) {
  const track = useRef(null);
  const pausedUntil = useRef(0);
  const inView = useContext(SectionContext);
  const [active, setActive] = useState(0);

  const slideStep = () => {
    const first = track.current?.children[0];
    return first ? first.offsetWidth + GAP : 1;
  };

  const goTo = useCallback(
    (i) => {
      const n = items.length;
      const index = (i + n) % n;
      track.current?.scrollTo({ left: index * slideStep(), behavior: "smooth" });
    },
    [items.length],
  );

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / slideStep()));
  };

  const pause = () => {
    pausedUntil.current = Date.now() + 8000;
  };

  // Avance automático (se pausa 8 s cuando el invitado toca el carrusel)
  useEffect(() => {
    if (!autoplayMs || !inView || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      goTo(active + 1);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, inView, items.length, active, goTo]);

  const arrow =
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-paper bg-wine-dark/85 text-paper shadow-lg transition active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <div
      className="relative -mx-8 w-[calc(100%+4rem)]"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería de fotos"
      onPointerDown={pause}
    >
      <div
        ref={track}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[11%] py-6"
      >
        {items.map((item, i) => (
          <div
            key={i}
            data-active={i === active}
            className="w-[78%] shrink-0 snap-center scale-[0.88] opacity-60 transition duration-500 ease-out data-[active=true]:scale-100 data-[active=true]:opacity-100"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${items.length}`}
          >
            {item}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button type="button" aria-label="Foto anterior" onClick={() => { pause(); goTo(active - 1); }} className={`${arrow} left-2`}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Foto siguiente" onClick={() => { pause(); goTo(active + 1); }} className={`${arrow} right-2`}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la foto ${i + 1}`}
                aria-current={i === active}
                onClick={() => { pause(); goTo(i); }}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-paper" : "w-2.5 bg-paper/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
