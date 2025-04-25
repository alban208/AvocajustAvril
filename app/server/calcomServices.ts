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

export async function getAvailableSlots() {
  const username = 'daniel-gbogou-y44moc';
  const id = 1381468; // Remplace par l'ID de la réservation que tu veux récupérer
  try {

    const response = await fetch(`/api/cal/slots`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  } catch (error) {
    console.error("Error fetching available slots:", error);
  }
}
