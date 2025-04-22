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
const API_KEY = "cal_live_eb4258035eb5e1230ceaaf1d889bf6d1"; // Mets ta vraie clé API
const USERNAME = "daniel-gbogou-y44moc"

export default function CalendarComponent() {
  interface Slot {
    startTime: string;
    endTime: string;
    eventTypeSlug: string;
  }

  const [slots, setSlots] = useState<Slot[]>([]);

  useEffect(() => {
    // async function fetchSlots() {
    //   try {
    //     console.log("📡 Envoi de la requête à notre API interne...");
    //     const response = await fetch("/api/calcom");
    //     const data = await response.json();
    //     console.log("✅ Créneaux récupérés :", data);
    //     console.log("Valeur de data :", data); // Affiche la valeur de data dans la console
    //     //setSlots(Array.isArray(data) ? data : []); // S'assurer que data est un tableau
    //   } catch (error) {
    //     console.error("❌ Erreur lors de la récupération des créneaux :", error);
    //     setSlots([]); // En cas d'erreur, éviter d'avoir undefined
    //   }
    // }
    // fetchSlots();

  }, []);

  return (
    <div>
      <h2>Prendre un Rendez-vous</h2>
      <pre>Valeur actuelle de slots: {JSON.stringify(slots, null, 2)}</pre> {/* Affiche la valeur de slots */}
      {Array.isArray(slots) && slots.length === 0 ? (
        <p>Aucun créneau disponible.</p>
      ) : (
        <ul>
          {Array.isArray(slots) ? (
            slots.map((slot, index) => (
              <li key={index}>
                {new Date(slot.startTime).toLocaleString()} -{" "}
                {new Date(slot.endTime).toLocaleString()}
                <a
                  href={`https://cal.com/${slot.eventTypeSlug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver
                </a>
              </li>
            ))
          ) : (
            <p>❌ Erreur : `slots` n'est pas un tableau</p>
          
          )}
        </ul>
      )}




<div className="calendrier-container">      
  <Cal calLink="daniel-gbogou-y44moc"    
     style={{width: "100%", height: "600px"}}        
     config={{ layout: "month_view",
              hideEventTypeDetails: 'false'
                 }}      
                 />    </div>
    </div>
  );
}
