import express from 'express';
import axios from 'axios';

const router = express.Router();

const API_KEY = 'cal_live_eb4258035eb5e1230ceaaf1d889bf6d1';

router.get('/slots', async (req, res) => {
  const username = 'daniel-gbogou-y44moc';
  try {
    const response = await axios.get(`https://api.cal.com/v1/booking/=${username}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    res.json(response.data); // On renvoie les données à ton frontend
  } catch (error) {
    console.error("Erreur API Cal.com :", error.message);
    res.status(500).json({ error: "Erreur lors de la récupération des créneaux." });
  }
});

export default router;
