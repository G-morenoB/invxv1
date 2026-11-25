import { createContext } from "react";

/** true cuando la sección ya entró en pantalla; los hijos lo usan para animarse. */
export const SectionContext = createContext(false);
