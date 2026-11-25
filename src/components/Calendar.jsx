import { HeartIcon } from "./Icons";
import Reveal from "./Reveal";

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];

export function monthName(year, month) {
  return new Intl.DateTimeFormat("es-MX", { month: "long" }).format(new Date(year, month - 1, 1));
}

/** Calendario mensual (lunes a domingo). Los días aparecen en cascada y el del evento late. */
export default function Calendar({ year, month, day }) {
  const firstWeekday = (new Date(year, month - 1, 1).getDay() + 6) % 7; // lunes = 0
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <Reveal variant="flip" delay={200} className="w-full max-w-xs">
      <div className="rounded-xl border border-ink/25 bg-paper-light/80 px-5 py-6 shadow-sm">
        <p className="font-title text-3xl uppercase tracking-[0.15em]">{monthName(year, month)}</p>
        <p className="mb-4 font-body text-2xl font-bold tracking-widest">{year}</p>

        <div className="grid grid-cols-7 gap-y-2 font-body text-sm">
          {WEEKDAYS.map((d, i) => (
            <span key={i} className="font-bold">{d}</span>
          ))}
          {cells.map((d, i) =>
            d === day ? (
              <Reveal key={i} variant="zoom" delay={1500} className="relative flex items-center justify-center">
                <HeartIcon className="beat h-9 w-9 text-wine" />
                <span className="absolute text-xs font-bold text-white">{d}</span>
              </Reveal>
            ) : (
              <Reveal key={i} variant="fade" delay={700 + i * 25} className="flex h-9 items-center justify-center">
                {d}
              </Reveal>
            ),
          )}
        </div>
      </div>
    </Reveal>
  );
}
