const axios = require('axios') // import axios from 'axios'


const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`) 
        .then(response => response.data)
        .then(data => { let character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            origin: data.origin,
            image : data.image,
            status : data.status,
            species: data.species
        } 
            res
            .writeHead(200, {'Content-type': 'application/json'})
            .end(JSON.stringify(character))
            })
        .catch(err =>
            res
            .writeHead(500, {"Content-type": "text/plain"})
            .end(`El personaje con id:${id} no fue encontrado`)
            )
        
}


module.exports = getCharDetail;

