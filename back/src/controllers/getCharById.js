const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
function getCharById(req, res) {
  // localhost:3001/rickyandmorty/onsearch/1
  const { id } = req.params;
  axios(URL + id).then(
    (response) => {
      const character = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.image,
        gender: response.data.gender,
        species: response.data.species,
      };
      res.status(200).json(character);
    },
    (error) => res.status(500).json(error.message)
  );
}

module.exports = {getCharById};

// const axios = require('axios') // import axios from 'axios'

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => { let character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             origin: data.origin,
//             image : data.image,
//             status : data.status,
//             species: data.species
//         }
//             res
//             .writeHead(200, {'Content-type': 'application/json'})
//             .end(JSON.stringify(character))
//             })
//         .catch(err =>
//             res
//             .writeHead(500, {"Content-type": "text/plain"})
//             .end(`El personaje con id:${id} no fue encontrado`)
//             )

// }

// module.exports = getCharById;
