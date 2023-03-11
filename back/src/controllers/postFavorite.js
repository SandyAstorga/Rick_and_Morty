// const favorites = require("../utils/favs");

const { Favorite } = require('../DB_connection');

// const postFavorites = (req, res) => {
//     const { character } = req.body;
//     if (character) {
//         favorites.push(character)
//     }
//     res.status(200).send('add new character to favorite list')
// }

const postFavorites = async (req, res) => {
    try {
        await Favorite.create(req.body);
        res.status(200).send
    } catch (error) {
        
    }

}
module.exports = postFavorites;