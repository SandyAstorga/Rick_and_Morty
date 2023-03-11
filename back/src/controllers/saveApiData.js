const axios = require('axios');
const { Character } = require('../DB_connection.js')


const getApiData = async() => { //Obtener 100 personajes de la API rickandmorty
    try {
        let i = 1;
        let characters = []; //Se guardan las promesas

        while(i < 6){
        let apidata = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
        //Devuelve una promesa
        
        characters.push(apidata);
        i++;
        }

        characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {
            return({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image
            })
        }))

        let allCharacters = [];
        characters.map(char => { allCharacters = allCharacters.concat
            (char)})

            return allCharacters;        

    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async() => {
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters)
//bulkCreate Permite pasarle un array de objetos y los crea todos juntos en al DB
    } catch (error) {
        return {error: error.message}
    }
}
module.exports ={
    saveApiData
}