// import axios from "axios";

// const API_KEY = "cal_live_eb4258035eb5e1230ceaaf1d889bf6d1"; // Remplace par ta clé API Cal.com
// const USERNAME = "daniel-gbogou-y44moc"; // Corrected to just the username

// export async function getAvailableSlots() {
//   try {
//     const response = await axios.get(
//       `https://api.cal.com/v1/booking/slots?username=${USERNAME}`,
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );
//     return response.data; // Retourne les créneaux disponibles
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error("Axios error:", error.message);
//     } else {
//       console.error("Unexpected error:", error);
//     }
//     return [];
//   }
// }


import axios from "axios";

const API_KEY = "cal_live_eb4258035eb5e1230ceaaf1d889bf6d1"; // Mets ta vraie clé API
const TEAM_MEMBERS = ["daniel-gbogou-y44moc","azerty89 "];// Mets ton vrai identifiant Cal.com

export async function getAvailableSlots() {
  try {
    console.log("🔍 Envoi de la requête à l'API Cal.com...");
    const response = await axios.get(
      `https://api.cal.com/v1/booking/slots?username=${TEAM_MEMBERS}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    console.log("✅ Réponse reçue :", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la requête API :", error);
    return [];
  }
}
