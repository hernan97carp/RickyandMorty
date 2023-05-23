const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFavorite = await Favorite.findByPk(id);
    deletedFavorite.destroy();
    const allFavoritesCharacters = await Favorite.findAll();
    return res.status(200).json(allFavoritesCharacters);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
