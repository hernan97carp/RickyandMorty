const router = require('express').Router();
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const {postFav, deleteFav } = require("../controllers/handleFavorites")
const { login } = require("../controllers/login")
//me va a devolver un middleware
// a q ruta le voy a estar pegando y va a ejecutar get chard id
router.get("/onsearch/:id", getCharById)
                            // ejecutara ese controlador
router.get("/detail/:detailId",getCharDetail)

// router.get("/login", login)
router.get("/login", (req, res)=>{
    login(req, res)
})
// router.post("/favs", postFav )
// router.delete("/favs/:id", deleteFav)

module.exports = router;