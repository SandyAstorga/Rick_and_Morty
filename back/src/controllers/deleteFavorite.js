const favorites = require("../utils/favs");

const deleteFavorite = (req, res) => {
    const { id } = req.params
    if (id) {
        const favoritesFiltered = favorites.filter(item => item.id !== Number(id))
        if (favoritesFiltered.length !== favorites.length) {
            favorites = favoritesFiltered
            res.status(200).json({ 'succes': true })
        }
    }
}

module.exports = deleteFavorite;