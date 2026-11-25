import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Controla la música de fondo.
 * Los navegadores bloquean el autoplay con sonido, así que:
 *  1) se intenta reproducir al cargar,
 *  2) si falla, arranca con el primer toque/clic/tecla del invitado.
 */
export function useMusic({ src, volume = 0.6 }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audio.preload = "auto";
    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const events = ["pointerdown", "touchend", "click", "keydown"];
    const removeUnlock = () => events.forEach((e) => window.removeEventListener(e, unlock));
    function unlock() {
      audio.play().then(removeUnlock).catch(() => {});
    }

    audio.play().catch(() => {
      events.forEach((e) => window.addEventListener(e, unlock, { passive: true }));
    });

    return () => {
      removeUnlock();
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [src, volume]);

  const play = useCallback(() => audioRef.current?.play().catch(() => {}), []);
  const pause = useCallback(() => audioRef.current?.pause(), []);
  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => {});
    else audio.pause();
  }, []);

  return { playing, play, pause, toggle };
}
