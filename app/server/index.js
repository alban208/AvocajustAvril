import express from 'express';
import cors from 'cors';
import calRoutes from './routes/cal.js';

const app = express();
app.use(cors()); // Permet d’accepter les requêtes venant de ton frontend
app.use('/api/cal', calRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
