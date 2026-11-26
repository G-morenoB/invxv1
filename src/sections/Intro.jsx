import Section from "../components/Section";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import { ClockPlayButton } from "../components/Icons";
import { invitation } from "../config/invitation";

export default function Intro({ onOpen }) {
  const { buttonLabel, paragraphs } = invitation.intro;

  return (
    <Section id="intro" className="bg-parchment">
      <ImageSlot slot="introTopLeft" label="Cartas y rosa" variant="left" delay={600} className="absolute -left-3 top-12 h-28 w-28" />
      <ImageSlot slot="introMiddleLeft" label="Sombrero" variant="left" delay={800} className="absolute -left-4 top-[55%] h-36 w-28" />
      <ImageSlot slot="introRight" label="Rosas" variant="right" delay={700} className="absolute -right-4 top-[30%] h-32 w-24" />
      <ImageSlot slot="introBottomRight" label="Cartas" variant="right" delay={900} className="absolute -right-3 bottom-4 h-32 w-28" />

      <Reveal variant="up" className="relative z-10 w-full max-w-xs">
        <div className="flex w-full flex-col items-center rounded-t-[10rem] rounded-b-3xl border border-ink/20 bg-paper-light/80 px-6 pb-10 pt-12 shadow-sm">
          <Reveal variant="spin" delay={400}>
            <button
              type="button"
              onClick={onOpen}
              className="group flex flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              <ClockPlayButton className="pulse-soft h-24 w-24 drop-shadow-md" />
              <span className="max-w-[12rem] font-display text-sm uppercase leading-tight tracking-wider text-ink">
                {buttonLabel}
              </span>
            </button>
          </Reveal>

          <div className="mt-8 space-y-5 font-body text-base leading-relaxed">
            {paragraphs.map((p, i) => (
              <Reveal key={i} variant="up" delay={800 + i * 350}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
