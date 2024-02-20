const characters = require('../data/characters');

exports.getAllCharacters = (req, res) => {
  res.json(characters);
};
