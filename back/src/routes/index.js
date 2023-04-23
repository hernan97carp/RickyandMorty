const {Router} = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
//me va a devolver un middleware
const router = Router();
// a q ruta le voy a estar pegando y va a ejecutar get chard id
router.get("/onsearch/:id",getCharById)
                            // ejecutara ese controlador
router.get("/detail/:detailId",getCharDetail)
module.exports = router;