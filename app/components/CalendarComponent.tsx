"use client";
import { useState, useEffect } from "react";
import { getAvailableSlots } from "../services/calcomServices";

export default function CalendarComponent() {
  const [slots, setSlots] = useState<{ startTime: string; endTime: string; eventTypeSlug: string }[]>([]);

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
  );
}

