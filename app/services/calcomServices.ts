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
import { getAvailableSlots as fetchAvailableSlots } from "../api/calcom/routes";

const API_KEY = "cal_live_e0b3d2ffb9310c0feed1b488fae365bb"; // Mets ta vraie clé API
const TEAM_MEMBERS = ["daniel-gbogou-y44moc","avocajustT "];// Mets ton vrai identifiant Cal.com

export async function getAvailableSlots() {
  try {
    console.log("🔍 Envoi de la requête à l'API Cal.com...");

    const startTime = 11;
    const endTime = 12;
    const eventTypeId = 1;

    const url = `https://api.cal.com/v1/slots?apiKey=${ API_KEY }&startTime=${ startTime }&endTime=${ endTime }&${ TEAM_MEMBERS.map(m => "usernameList=" + m).join(',') }&eventTypeId=${ eventTypeId }`;

    const response = await axios.get(url);
    // Example usage of fetchAvailableSlots to avoid confusion
    // const slots = await fetchAvailableSlots();
    console.log("✅ Réponse reçue :", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la requête API :", error);
    return [];
  }
}
