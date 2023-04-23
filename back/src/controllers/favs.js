const favs = require("../utils/favs")

function postFav(req, res){
    favs.push(req.body)
    res.status(201).json(favs); 
}
function getFav(req, res){
    res.status(200).json(favs)
}
function deleteFav(req, res){
    const {id} = req.params;
  favs = favs.filter(character=>character.id !== Number(id))
  res.status(200).json(favs);
}
module.exports = { postFav, getFav, deleteFav }