// const axios = require("axios");


// const getCharById = function (res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((data) => data.data)
//     .then((data) => {
//       const character = {
//         image: data.image,
//         name: data.name,
//         Gender: data.gender,
//         species: data.species,
//         id: data.id,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     }).catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Character not found");
//     })
// };

// module.exports = {
//     getCharById
//   };

// const axios = require('axios')

// const URL = "https://rickandmortyapi.com/api/character/${id}"

// const getChatById = (req, res) => {
//     const { id } = req.params

//     try {
//         axios(`${URL}${id}`)
//         .then(result => result.data)
//         .then(data => {
//             let character = {
//                 id: data.id,
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//             }
//             res.status(200).json(character)
//         })
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// }

// module.exports = getChatById;

const axios = require("axios");

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const info = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    let character = {
      id: info.data.id,
      name: info.data.name,
      image: info.data.image,
      gender: info.data.gender,
      specie: info.data.specie,
    };
    res.status(200).send(character);
  } catch (error) {
    res.status(400).send(err);
  }
};

module.exports = getCharById;