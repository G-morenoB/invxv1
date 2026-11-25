import Section from "../components/Section";
import Backdrop from "../components/Backdrop";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import { invitation } from "../config/invitation";

const Lines = ({ lines }) => (
  <p className="font-body text-lg uppercase leading-snug tracking-wide">
    {lines.map((l, i) => (
      <span key={i} className="block">{l}</span>
    ))}
  </p>
);

export default function Parents() {
  const { intro, mother, father, thanks } = invitation.parents;

  return (
    <Section id="padres" className="text-paper-light">
      <Backdrop slot="parents" fallback="bg-wine" />
      <ImageSlot slot="parentsTopLeft" label="Carta" variant="left" delay={800} className="absolute left-0 top-0 h-28 w-24" />
      <ImageSlot slot="parentsTopRight" label="Corona" variant="down" delay={1000} className="absolute right-0 top-0 h-24 w-24" />
      <ImageSlot slot="parentsLeft" label="Libro / naipe" variant="left" delay={1200} className="absolute -left-4 top-[40%] h-36 w-24" />
      <ImageSlot slot="parentsBottomLeft" label="Cartas" variant="up" delay={1400} className="absolute -bottom-2 left-0 h-28 w-28" />
      <ImageSlot slot="parentsBottomRight" label="Cartas" variant="up" delay={1500} className="absolute -bottom-2 right-0 h-28 w-28" />

      <div className="relative z-10 max-w-xs">
        <Reveal variant="up" delay={100}>
          <p className="font-title text-2xl uppercase leading-snug tracking-wider">{intro}</p>
        </Reveal>

        <div className="my-8 space-y-4">
          <Reveal variant="up" delay={450}><Lines lines={mother} /></Reveal>
          <Reveal variant="zoom" delay={700}><p className="font-title text-3xl">&</p></Reveal>
          <Reveal variant="up" delay={950}><Lines lines={father} /></Reveal>
        </div>

        <Reveal variant="up" delay={1300}>
          <p className="font-title text-xl uppercase leading-snug tracking-wider">{thanks}</p>
        </Reveal>
      </div>
    </Section>
  );
}
