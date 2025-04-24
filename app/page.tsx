"use client";

import Image from "next/image";
import CalendarComponent from "./components/CalendarComponent";

export default function Home() {
  return (
    <div id="appointment-screen">
      <main>
        <h1>Bienvenue sur notre plateforme</h1>
        <CalendarComponent /> 
      </main>
    </div>
  );
}

  

