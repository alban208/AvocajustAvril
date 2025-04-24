// import { NextResponse } from "next/server";
// import axios from "axios";

// const API_KEY = "cal_live_eb4258035eb5e1230ceaaf1d889bf6d1"; // Mets ta vraie clé API
// const USERNAME = "daniel-gbogou-y44moc"; // Mets ton identifiant Cal.com

// export async function GET() {
//   try {
//     console.log("📡 Envoi de la requête à l'API Cal.com...");
//     const response = await axios.get(
//       `https://api.cal.com/v1/booking/slots?username=${USERNAME}`,
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );
//     console.log("✅ Réponse API :", response.data);
//     return NextResponse.json(response.data);
//   } catch (error) {
//     console.error("❌ Erreur API Cal.com :", error.response?.data || error.message);
//     return NextResponse.json(
//       { error: error.response?.data || "Impossible de récupérer les créneaux" },
//       { status: error.response?.status || 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = "cal_live_eb4258035eb5e1230ceaaf1d889bf6d1"; // Mets ta vraie clé API
const TEAM_MEMBERS = ["daniel-gbogou-y44moc","azerty89 "];  // Mets ton identifiant Cal.com

export async function getAvailableSlots() {
  try {
    console.log("🔍 Envoi de la requête à l'API Cal.com...");
    
    const slots = await Promise.all(
      TEAM_MEMBERS.map(async (member) => {
        const response = await axios.get(
          `https://api.cal.com/v1/booking/slots?username=${member}`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        return { member, slots: response.data };
      })
    );

    console.log("✅ Réponse reçue :", slots);
    return slots;
  } catch (error) {
    console.error("❌ Erreur API Cal.com :", error);
    return [];
  }
}
