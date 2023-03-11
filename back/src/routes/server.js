// const http = require("http");
// const { getCharById } = require('../controllers/getCharById.js');
// const { getCharDetail } = require('../controllers/getCharDetail.js');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     let id = req.url.split('/').at(-1);

//     if (req.url.includes("onsearch")) getCharById(res, id)
//     if (req.url.includes("detail")) getCharDetail(res, id)
    


// }).listen(3001, "localhost");

const { router } = require('../routes/index')
const express = require('express');
const server = express();
const PORT = 3001;
const { saveApiData } = require('../controllers/saveApiData.js');
const { sequelize } = require('../DB_connection.js');
const getAllChars =  require('../controllers/getAllChars.js')

server.use(express.json())
server.use('/rickandmorty/', router)

sequelize.sync({force: true}).then(async() => {
    await saveApiData();
    console.log(await saveApiData());
    console.log('DB, conected');
    server.listen(PORT, () => {
        // res.setHeader('Access-Control-Allow-Origin', '*')
        console.log('Server raised in port ' + PORT);
    });
})



module.exports = { server };