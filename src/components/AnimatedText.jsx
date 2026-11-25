import { useContext } from "react";
import { SectionContext } from "./SectionContext";

/** Texto cuyas letras caen una a una (efecto "cayendo por la madriguera"). */
export default function AnimatedText({ text, className = "", delay = 0, step = 90 }) {
  const inView = useContext(SectionContext);
  return (
    <span className={className} aria-label={text}>
      {[...text].map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="letter inline-block"
          data-in={inView}
          style={{ "--d": `${delay + i * step}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
