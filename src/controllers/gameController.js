const games = require('../data/games');

exports.getAllgames = (req, res) => {
  res.json(games);
};
