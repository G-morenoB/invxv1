import { invitation } from "./config/invitation";
import { useMusic } from "./hooks/useMusic";
import MusicPlayer from "./components/MusicPlayer";
import Cover from "./sections/Cover";
import Intro from "./sections/Intro";
import SaveTheDate from "./sections/SaveTheDate";
import Countdown from "./sections/Countdown";
import Ceremony from "./sections/Ceremony";
import Reception from "./sections/Reception";
import Gallery from "./sections/Gallery";
import Gift from "./sections/Gift";
import Parents from "./sections/Parents";

export default function App() {
  const music = useMusic(invitation.music);

  const openInvitation = () => {
    music.play();
    document.getElementById("fecha")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <MusicPlayer playing={music.playing} onToggle={music.toggle} />

      {/* Columna tipo celular centrada; en pantallas grandes se ve igual */}
      <main className="mx-auto w-full max-w-md overflow-hidden shadow-2xl">
        <Cover />
        <Intro onOpen={openInvitation} />
        <SaveTheDate />
        <Countdown />
        <Ceremony />
        <Reception />
        <Gallery />
        <Gift />
        <Parents />
      </main>
    </>
  );
}
