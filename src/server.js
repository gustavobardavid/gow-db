const express = require('express');
const characterRoutes = require('./routes/characterRouter');
const gameRoutes = require('./routes/gamesRouter')
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitindo solicitações de todas as origens
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
  next();
});

app.use('/v1', characterRoutes);
app.use('/v1', gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
