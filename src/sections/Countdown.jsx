import Section from "../components/Section";
import Backdrop from "../components/Backdrop";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import { useCountdown } from "../hooks/useCountdown";
import { invitation } from "../config/invitation";

const pad = (n) => String(n).padStart(2, "0");

function Unit({ value, label, delay }) {
  return (
    <Reveal variant="up" delay={delay} className="flex flex-col items-center">
      {/* key = value → la animación "tick" se repite cada vez que el número cambia */}
      <span key={value} className="tick font-title text-4xl tabular-nums text-white">{pad(value)}</span>
      <span className="mt-1 font-body text-[0.65rem] uppercase tracking-widest text-white/80">{label}</span>
    </Reveal>
  );
}

const Colon = ({ delay }) => (
  <Reveal variant="fade" delay={delay}>
    <span className="font-title text-4xl text-white/80">:</span>
  </Reveal>
);

export default function Countdown() {
  const t = useCountdown(invitation.event);
  const { title, finished } = invitation.countdown;

  return (
    <Section id="cuenta-regresiva">
      <Backdrop slot="countdown" fallback="bg-wine-dark" overlay="bg-black/10" />
      <ImageSlot slot="countdownRabbit" label="Conejo blanco" variant="right" delay={1000} className="absolute -bottom-2 -right-2 h-36 w-28" />

      <div className="relative z-10">
        <Reveal variant="down">
          <p className="mb-6 font-title text-2xl uppercase tracking-[0.3em] text-white">{title}</p>
        </Reveal>

        {t.finished ? (
          <Reveal variant="zoom" delay={300}>
            <p className="font-display text-4xl text-white">{finished}</p>
          </Reveal>
        ) : (
          <div className="flex items-start justify-center gap-2" role="timer" aria-live="off">
            <Unit value={t.days} label="Días" delay={300} />
            <Colon delay={450} />
            <Unit value={t.hours} label="Hrs" delay={500} />
            <Colon delay={650} />
            <Unit value={t.minutes} label="Min" delay={700} />
            <Colon delay={850} />
            <Unit value={t.seconds} label="Seg" delay={900} />
          </div>
        )}
      </div>
    </Section>
  );
}
