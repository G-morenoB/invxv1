import Section from "../components/Section";
import Backdrop from "../components/Backdrop";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";
import { invitation } from "../config/invitation";

const pad = (n) => String(n).padStart(2, "0");

export default function Cover() {
  const { title, name, event } = invitation;
  const shortDate = `${pad(event.day)} · ${pad(event.month)} · ${String(event.year).slice(-2)}`;

  return (
    <Section id="portada">
      <Backdrop slot="cover" fallback="bg-wine-dark" />

      <ImageSlot slot="coverTopLeft" label="Reloj de bolsillo" variant="left" delay={900} className="absolute -left-4 -top-2 h-36 w-36" />
      <ImageSlot slot="coverTopRight" label="Cartas" variant="right" delay={1050} className="absolute -right-3 top-6 h-32 w-28" />
      <ImageSlot slot="coverBottomLeft" label="Naipes / sombrero" variant="left" delay={1200} className="absolute -bottom-2 -left-4 h-44 w-40" />
      <ImageSlot slot="coverBottomRight" label="Frasco / taza" variant="right" delay={1350} className="absolute -bottom-2 -right-4 h-44 w-40" />

      <Reveal variant="down" delay={100}>
        <p className="font-display text-2xl tracking-[0.2em] text-white [text-shadow:0_2px_0_#1a1a1a,0_0_10px_#000]">
          {title}
        </p>
      </Reveal>

      <h1 className="title-outline mt-2 font-display text-[length:clamp(4.5rem,24vw,7rem)] leading-none text-white">
        <AnimatedText text={name} delay={350} step={150} />
      </h1>

      <Reveal variant="up" delay={1100}>
        <p className="mt-4 rounded bg-black/60 px-4 py-1 font-title text-2xl tracking-[0.25em] text-white">
          {shortDate}
        </p>
      </Reveal>
    </Section>
  );
}
