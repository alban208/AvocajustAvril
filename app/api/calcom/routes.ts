import axios from "axios";

const API_KEY = "cal_live_a30f10d28e2df4ce8613814e21e99afe  "; 
const USERNAME = "daniel-gbogou-y44moc"; // Identifiant unique de l'utilisateur

export async function getAvailableSlots() {
  try {
    console.log("🔍 Envoi de la requête à l'API Cal.com...");

    const startTime = 11;
    const endTime = 12;
    const eventTypeId = 1;

    const url = `https://api.cal.com/v1/slots?apiKey=${API_KEY}&startTime=${startTime}&endTime=${endTime}&eventTypeId=${eventTypeId}&username=${USERNAME}`;

    const response = await axios.get(url);
    console.log("✅ Réponse reçue :", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Erreur lors de la requête API :", error);
    return [];
  }
}
