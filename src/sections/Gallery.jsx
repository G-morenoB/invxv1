import Section from "../components/Section";
import Backdrop from "../components/Backdrop";
import Reveal from "../components/Reveal";
import Carousel from "../components/Carousel";
import { invitation } from "../config/invitation";

/** Foto con marco de papel (tipo polaroid). Sin imagen muestra un recuadro para rellenar. */
function Photo({ src, index }) {
  return (
    <figure className="rounded-sm bg-paper-light p-2 pb-8 shadow-xl">
      {src ? (
        <img src={src} alt={`Foto ${index + 1}`} draggable={false} className="aspect-[3/4] w-full select-none object-cover" />
      ) : (
        <div className="flex aspect-[3/4] w-full items-center justify-center border-2 border-dashed border-ink/40 bg-ink/10 font-body text-sm text-ink/70">
          Foto {index + 1}
        </div>
      )}
    </figure>
  );
}

export default function Gallery() {
  const { title, photos, autoplayMs } = invitation.gallery;
  const list = photos.filter((src) => src || invitation.showPlaceholders);
  if (list.length === 0) return null;

  return (
    <Section id="galeria" className="text-paper-light">
      <Backdrop slot="gallery" mode="tile" fallback="bg-teal-deep" overlay="bg-black/25" />

      <Reveal variant="down">
        <h2 className="font-display text-4xl uppercase tracking-wider">{title}</h2>
      </Reveal>

      <Reveal variant="up" delay={400} className="mt-4 w-full">
        <Carousel items={list.map((src, i) => <Photo key={i} src={src} index={i} />)} autoplayMs={autoplayMs} />
      </Reveal>
    </Section>
  );
}
