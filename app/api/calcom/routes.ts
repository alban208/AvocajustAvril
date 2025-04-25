import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = "cal_live_eb4258035eb5e1230ecaafd889bf6d1"; // Mets ta vraie clé API
const USERNAME = "daniel-gbogou-y44moc"; // Mets ton identifiant Cal.com
const id =  1381468

export async function GET() {
  try {
    console.log("✅ Envoi de la requête à Cal.com...");
    const response = await fetch(
      `https://api.cal.com/v1/booking/${id}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const data = await response.json();
    console.log("✅ Réponse API :", JSON.stringify(data, null, 2));
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Erreur API Cal.com :", (error as any).response?.data || (error as any).message);
    return NextResponse.json({
      error: (error as any).response?.data || "Impossible de récupérer les créneaux",
      status: (error as any).response?.status || 500
    });
  }
}
