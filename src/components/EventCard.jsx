import Section from "./Section";
import ImageSlot from "./ImageSlot";
import Reveal from "./Reveal";
import LocationButton from "./LocationButton";

/** Tarjeta reutilizable para Ceremonia y Recepción. */
export default function EventCard({ id, data, imageSlot, imageLabel }) {
  return (
    <Section id={id} className="bg-parchment">
      <ImageSlot slot={imageSlot} label={imageLabel} variant="zoom" className="mb-6 h-44 w-56" />

      <Reveal variant="up" delay={350}>
        <h2 className="font-title text-4xl font-bold text-wine">{data.title}</h2>
      </Reveal>

      <Reveal variant="up" delay={550}>
        <p className="mt-4 font-body text-xl leading-snug text-ink">
          {data.place}
          <br />
          {data.address}
        </p>
      </Reveal>

      <Reveal variant="zoom" delay={800} className="mt-6">
        <LocationButton href={data.mapUrl}>{data.buttonLabel}</LocationButton>
      </Reveal>

      <Reveal variant="up" delay={1000}>
        <p className="mt-8 font-body text-2xl">{data.time}</p>
      </Reveal>
    </Section>
  );
}
