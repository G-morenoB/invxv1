import { useEffect, useRef, useState } from "react";
import { SectionContext } from "./SectionContext";

/**
 * Contenedor base de cada pantalla. Detecta cuándo entra al viewport
 * y activa las animaciones de sus hijos (Reveal, ImageSlot, AnimatedText…).
 */
export default function Section({ id, className = "", children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <SectionContext.Provider value={inView}>
      <section
        ref={ref}
        id={id}
        className={`relative isolate flex min-h-svh w-full snap-start flex-col items-center justify-center overflow-hidden px-8 py-16 text-center ${className}`}
      >
        {children}
      </section>
    </SectionContext.Provider>
  );
}
