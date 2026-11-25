import Section from "../components/Section";
import Backdrop from "../components/Backdrop";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import Draw from "../components/Draw";
import { DressIcon, JacketIcon } from "../components/Icons";
import { invitation } from "../config/invitation";

export default function DressCode() {
  const { title, code } = invitation.dressCode;

  return (
    <Section id="vestimenta" className="justify-end pb-20 text-paper-light">
      <Backdrop slot="dressCode" mode="tile" fallback="bg-teal-deep" overlay="bg-black/20" />

      {/* Franja superior de papel con borde roto */}
      <Reveal variant="down" className="torn-bottom absolute inset-x-0 top-0 h-[38%] bg-parchment" />
      <ImageSlot slot="dressAlice" label="Alicia" variant="left" delay={500} className="absolute left-0 top-0 h-[34%] w-32" />
      <ImageSlot slot="dressTopRight" label="Rama / árbol" variant="right" delay={700} className="absolute right-0 top-0 h-28 w-24" />

      <div className="relative z-10 flex flex-col items-center">
        <Reveal variant="up" delay={600}>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-wider">{title}</h2>
        </Reveal>
        <Reveal variant="zoom" delay={900}>
          <p className="mt-6 font-title text-2xl uppercase tracking-[0.25em]">{code}</p>
        </Reveal>

        <div className="mt-8 flex items-end gap-8 text-paper-light">
          <Draw delay={1100}><JacketIcon className="h-28 w-24" /></Draw>
          <Draw delay={1500}><DressIcon className="h-28 w-24" /></Draw>
        </div>
      </div>
    </Section>
  );
}
