import { useEffect, useRef } from "react";
import { invitation } from "../config/invitation";

/**
 * Fondo de pantalla con efecto parallax al deslizar.
 *  slot    : clave en `backgrounds` (config/invitation.js)
 *  mode    : "cover" (imagen completa) | "tile" (se repite hacia abajo)
 *  overlay : clases Tailwind para oscurecer/aclarar encima (opcional)
 */
export default function Backdrop({ slot, mode = "cover", overlay = "", fallback = "bg-night", parallax = 0.08 }) {
  const wrap = useRef(null);
  const layer = useRef(null);
  const src = invitation.backgrounds[slot];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = wrap.current;
      const ly = layer.current;
      if (!el || !ly) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1 … 1
      ly.style.transform = `translate3d(0, ${(-p * r.height * parallax).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <div ref={wrap} aria-hidden="true" className={`absolute inset-0 -z-10 overflow-hidden ${fallback}`}>
      {src && (
        <div
          ref={layer}
          className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: mode === "tile" ? "100% auto" : "cover",
            backgroundRepeat: mode === "tile" ? "repeat-y" : "no-repeat",
            backgroundPosition: "center",
          }}
        />
      )}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
    </div>
  );
}
