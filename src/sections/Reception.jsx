import EventCard from "../components/EventCard";
import { invitation } from "../config/invitation";

export default function Reception() {
  return <EventCard id="recepcion" data={invitation.reception} imageSlot="receptionImage" imageLabel="Sombrero con naipes" />;
}
