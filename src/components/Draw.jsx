import { useContext } from "react";
import { SectionContext } from "./SectionContext";

/** Envuelve un icono SVG de línea y lo "dibuja" al entrar en pantalla. */
export default function Draw({ delay = 0, className = "", children }) {
  const inView = useContext(SectionContext);
  return (
    <div className={`draw ${className}`} data-in={inView} style={{ "--d": `${delay}ms` }}>
      {children}
    </div>
  );
}
