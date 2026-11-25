import Section from "../components/Section";
import Backdrop from "../components/Backdrop";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import { BagsIcon, EnvelopeIcon } from "../components/Icons";
import { invitation } from "../config/invitation";

export default function Gift() {
  const { title, type, note } = invitation.gift;
  const hasBag = invitation.images.giftBag || invitation.showPlaceholders;

  return (
    <Section id="regalo">
      <Backdrop slot="gift" fallback="bg-paper" />
      <ImageSlot slot="giftRabbit" label="Conejo con trompeta" variant="right" delay={900} className="absolute -right-2 top-2 h-32 w-28" />

      {/* Panel de papel para que el texto se lea sobre el estampado */}
      <Reveal variant="up" className="relative z-10 w-full max-w-xs">
        <div className="flex flex-col items-center rounded-2xl border border-ink/20 bg-paper-light/90 px-6 py-10 text-ink shadow-lg">
          <Reveal variant="down" delay={250}>
            <h2 className="font-display text-4xl uppercase leading-tight tracking-wider text-wine">{title}</h2>
          </Reveal>

          <Reveal variant="zoom" delay={600} className="mt-8">
            <div className="wiggle"><EnvelopeIcon className="h-14 w-16" /></div>
          </Reveal>

          <Reveal variant="up" delay={850}>
            <p className="mt-3 font-title text-3xl uppercase tracking-widest">{type}</p>
          </Reveal>
          <Reveal variant="up" delay={1050}>
            <p className="mt-3 max-w-[16rem] font-body text-base uppercase leading-snug text-ink/80">{note}</p>
          </Reveal>

          <div className="mt-8">
            {hasBag ? (
              <ImageSlot slot="giftBag" label="Bolsas de regalo" variant="zoom" delay={1250} className="h-28 w-28" />
            ) : (
              <Reveal variant="zoom" delay={1250}><BagsIcon className="float-soft h-24 w-24" /></Reveal>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
