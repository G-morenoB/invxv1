/* Iconos simples en SVG (línea). Puedes reemplazarlos por tus propias imágenes. */

export const HeartIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 21 C3 14 1 9 1 6.5 C1 3.5 3.5 1.5 6 1.5 C8.5 1.5 10.8 3 12 5.2 C13.2 3 15.5 1.5 18 1.5 C20.5 1.5 23 3.5 23 6.5 C23 9 21 14 12 21Z" />
  </svg>
);

export const EnvelopeIcon = ({ className = "" }) => (
  <svg viewBox="0 0 64 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
    <rect x="3" y="4" width="58" height="40" rx="3" />
    <path d="M4 7l28 21L60 7" />
  </svg>
);

export const JacketIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
    <path d="M28 6 L14 14 L6 40 L8 92 L72 92 L74 40 L66 14 L52 6" />
    <path d="M28 6 L40 56 L52 6" />
    <path d="M28 6 L22 26 L34 34 M52 6 L58 26 L46 34" />
    <path d="M40 56 L40 92" />
    <circle cx="44" cy="68" r="1.8" fill="currentColor" />
    <path d="M14 14 L18 60 M66 14 L62 60" />
  </svg>
);

export const DressIcon = ({ className = "" }) => (
  <svg viewBox="0 0 80 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
    <path d="M26 4 L30 22 Q40 30 50 22 L54 4" />
    <path d="M30 22 L28 44 L8 94 Q40 100 72 94 L52 44 L50 22" />
    <path d="M28 44 Q40 50 52 44" />
    <path d="M24 70 Q40 78 56 70" />
  </svg>
);

export const BagsIcon = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
    <path d="M18 36 H54 L58 94 H14Z" />
    <path d="M28 36 V26 a8 8 0 0 1 16 0 V36" />
    <path d="M52 48 H88 L92 94 H56Z" />
    <path d="M62 48 V38 a8 8 0 0 1 16 0 V48" />
  </svg>
);

export const CursorIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4 2 L4 19 L8.5 15 L11.5 22 L14.5 20.7 L11.5 14 L17.5 14Z" fill="#fff" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const PlayIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M7 4.5 L20 12 L7 19.500Z" />
  </svg>
);

export const PauseIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <rect x="6" y="4.5" width="4.2" height="15" rx="1" />
    <rect x="13.8" y="4.5" width="4.2" height="15" rx="1" />
  </svg>
);

export const ClockPlayButton = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
    <circle cx="60" cy="60" r="56" fill="#2b1d17" />
    <circle cx="60" cy="60" r="50" fill="#f3e7cf" />
    <circle cx="60" cy="60" r="46" fill="#7d0b14" />
    {Array.from({ length: 12 }).map((_, i) => (
      <line
        key={i}
        x1="60" y1="17" x2="60" y2={i % 3 === 0 ? 25 : 21}
        stroke="#f3e7cf" strokeWidth={i % 3 === 0 ? 3 : 1.5}
        transform={`rotate(${i * 30} 60 60)`}
      />
    ))}
    <path d="M50 42 L82 60 L50 78Z" fill="#f3e7cf" />
  </svg>
);
