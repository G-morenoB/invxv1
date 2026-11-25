import { invitation } from "../config/invitation";
import Reveal from "./Reveal";

/**
 * Espacio para una imagen decorativa (con animación de entrada y flotado suave).
 *  - `slot`    : clave dentro de `images` en config/invitation.js
 *  - `label`   : texto del recuadro mientras no hay imagen
 *  - `className`: posición y tamaño (Tailwind). Ej: "absolute top-0 left-0 w-28 h-28"
 *  - `variant` : animación de entrada (up | down | left | right | zoom | spin | flip | fade)
 *  - `delay`   : retraso en ms · `float`: false para quitar el flotado
 */
export default function ImageSlot({ slot, label, className = "", variant = "zoom", delay = 0, float = true }) {
  const src = invitation.images[slot];
  const floatClass = float ? "float-soft" : "";
  const floatStyle = { animationDelay: `${delay}ms` };

  if (!src && !invitation.showPlaceholders) return null;

  return (
    <Reveal variant={variant} delay={delay} className={`pointer-events-none ${className}`}>
      {src ? (
        <img src={src} alt="" draggable={false} className={`h-full w-full select-none object-contain ${floatClass}`} style={floatStyle} />
      ) : (
        <div
          className={`flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-black/40 bg-white/45 p-1 text-center font-body text-[10px] leading-tight text-black/70 backdrop-blur-[1px] ${floatClass}`}
          style={floatStyle}
        >
          <span>
            {label}
            <br />
            <span className="opacity-60">({slot})</span>
          </span>
        </div>
      )}
    </Reveal>
  );
}
