import Section from "../components/Section";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import Calendar, { monthName } from "../components/Calendar";
import { invitation } from "../config/invitation";

const pad = (n) => String(n).padStart(2, "0");

export default function SaveTheDate() {
  const { event, saveTheDate } = invitation;
  const date = new Date(event.year, event.month - 1, event.day);
  const weekday = new Intl.DateTimeFormat("es-MX", { weekday: "long" }).format(date);

  return (
    <Section id="fecha" className="bg-parchment">
      <ImageSlot slot="saveTopRight" label="Frasco" variant="right" delay={500} className="absolute -right-2 top-4 h-28 w-20" />
      <ImageSlot slot="saveLeft" label="Rosa azul" variant="left" delay={700} className="absolute -left-4 top-[28%] h-28 w-20" />

      <Reveal variant="down">
        <h2 className="mb-6 font-display text-5xl uppercase text-ink">{saveTheDate.title}</h2>
      </Reveal>

      <Calendar year={event.year} month={event.month} day={event.day} />

      <Reveal variant="up" delay={2000}>
        <div className="mt-8 flex items-center gap-4 font-title text-ink">
          <span className="text-lg uppercase tracking-widest">{weekday}</span>
          <span className="h-14 w-px bg-ink/60" />
          <span className="flex flex-col leading-none">
            <span className="text-6xl">{pad(event.day)}</span>
            <span className="mt-1 text-sm uppercase tracking-widest">{monthName(event.year, event.month)}</span>
          </span>
          <span className="h-14 w-px bg-ink/60" />
          <span className="text-4xl">{event.year}</span>
        </div>
      </Reveal>
    </Section>
  );
}
