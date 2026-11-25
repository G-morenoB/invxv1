import { useContext } from "react";
import { SectionContext } from "./SectionContext";

/**
 * Anima a su contenido cuando la sección entra en pantalla.
 *  variant: up | down | left | right | zoom | spin | flip | fade
 *  delay  : milisegundos de espera (para escalonar elementos)
 */
export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", style, children, ...rest }) {
  const inView = useContext(SectionContext);
  return (
    <Tag
      className={`reveal reveal-${variant} ${className}`}
      data-in={inView}
      style={{ "--d": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
