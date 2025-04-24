// "use client";
// import InlineWidget from "@calcom/embed-react";

// export default function CalendarComponent() {
//   console.log("📅 Widget Cal.com chargé !");
//   return (
//     <div>
//       <h2>Prendre un Rendez-vous</h2>
//       <InlineWidget calLink ="https://cal.com/daniel-gbogou-y44moc/"/>
//     </div>
//   );
// }

"use client";
import axios from "axios";
import Cal from "@calcom/embed-react";
import { useState, useEffect } from "react";
import { getAvailableSlots } from "../services/calcomServices";
const API_KEY = "cal_live_eb4258035eb5e1230ceaaf1d889bf6d1"; // Mets ta vraie clé API
const USERNAME = "daniel-gbogou-y44moc"

export default function CalendarComponent() {
  const [slots, setSlots] = useState<{ member: string; slots: { startTime: string; endTime: string; eventTypeSlug: string }[] }[]>([]);

  useEffect(() => {
    async function fetchSlots() {
      const data = await getAvailableSlots();
      setSlots(data);
    }
    fetchSlots();
  }, []);

  return (
    <div>
      <h2>Prendre un Rendez-vous</h2>
      {slots.map(({ member, slots }) => (
        <div key={member}>
          <h3>Agenda de {member}</h3>
          {slots.length === 0 ? (
            <p>Aucun créneau disponible.</p>
          ) : (
            <ul>
              {slots.map((slot, index) => (
                <li key={index}>
                  {new Date(slot.startTime).toLocaleString()} - {new Date(slot.endTime).toLocaleString()}
                  <a href={`https://cal.com/${slot.eventTypeSlug}`} target="_blank" rel="noopener noreferrer">
                    Réserver
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

