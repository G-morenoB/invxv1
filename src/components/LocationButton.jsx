import { CursorIcon } from "./Icons";

export default function LocationButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative inline-block rounded-md bg-wine px-10 py-2.5 font-body text-lg text-white shadow-md transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
    >
      {children}
      <CursorIcon className="absolute -bottom-3 -right-5 h-7 w-7" />
    </a>
  );
}
