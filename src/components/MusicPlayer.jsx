import { PauseIcon, PlayIcon } from "./Icons";

/** Botón fijo arriba a la derecha para pausar / reanudar la música. */
export default function MusicPlayer({ playing, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      aria-pressed={playing}
      className="fixed right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-paper bg-wine-dark/90 text-paper shadow-lg backdrop-blur transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      {playing ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
    </button>
  );
}
