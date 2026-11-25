import EventCard from "../components/EventCard";
import { invitation } from "../config/invitation";

export default function Ceremony() {
  return <EventCard id="ceremonia" data={invitation.ceremony} imageSlot="ceremonyImage" imageLabel="Libros, taza y reloj" />;
}
