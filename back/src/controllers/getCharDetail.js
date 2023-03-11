// const axios = require('axios')

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(result => result.data)
//         .then(data => {
//             let char = {
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 status: data.status,
//                 origin: data.origin?.name,
//                 species: data.species
//             }
//             res
//                 .writeHead(200, { 'Content-Type': 'application/json' })
//                 .end(JSON.stringify(char))
//         })
//         .catch(err =>
//             res
//                 .writeHead(500, { 'Content-type': 'text/plain' })
//                 .end(`Personaje con ID:${id} no fue encontrado`)
//         )
// }

// module.exports = {getCharDetail};

// const axios = require('axios')
// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharDetail = (req, res) => {
//     const { id } = req.params

//     try {
//         axios(`${URL}${id}`)
//             .then(result => result.data)
//             .then(data => {
//                 let character = {
//                     id: data.id,
//                     image: data.image,
//                     name: data.name,
//                     gender: data.gender,
//                     species: data.species,
//                     origin: data.origin,
//                 }
//                 res.status(200).json(character)
//             })
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

// module.exports = getCharDetail;

const axios = require("axios");


const getCharDetail = async (req, res) => {
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
}

module.exports = getCharDetail;