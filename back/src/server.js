const express = require('express');
const server = express();
const morgan = require("morgan");
const PORT = 3001;
const router = require("../src/routes/index");


//parseara el body  de las solicitudes en formato jsonprefijo
server.use(express.json())
server.use(morgan("dev"))
//agregara el prefijo "/rickyandmorty" a todas las rutas definidas en tu router
//todo lo q vaya ala url  barra lo q sea vos anda y buscala desde router
//termina de enrutarlo con lo q esta en router 
server.use('/rickandmorty', router)






server.listen(PORT, ()=>{
  console.log("server raised in port "+ PORT);
});






// const http = require("http");
// const getCharById = require("./controllers/getCharById")
// const getCharDetail = require("./controllers/getCharDetail")
// // const character = require("./utils/data");


// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*')
// let id = req.url.split('/').at(-1);
//   if(req.url.includes('onsearch')){
//     getCharById(res, id)
//   }

//   if(req.url.includes('detail')){
//    getCharDetail(res, id)
//   }


// }).listen(3001, 'localhost')







// http.createServer((req, res)=>{

// res.setHeader('Acces-Control-Allow-Origin', '*');
// if(req.url.includes('rickandmorty/character')){
//   let id = req.url.split('/').at(-1);
//   let characterFilter = character.find(char => char.id === Number(id))

//   res
//   .writeHead(200, {'Content-type': "application/json"})
//   .end(JSON.stringify(characterFilter))
// }

// }).listen(3001, 'localhost')











//anda
// http
// .createServer((req,res)=>{
//     res.setHeader('Acces-Control-Allow-Origin', '*')
//     const {url} = req;
//     if(url.includes("rickyandmorty/character/")){
//     const id = url.split("/").at(-1)
//     const characterFilter = character.find(char=>char.id == Number(id));

//     res
//     .writeHead(200, {"Content-type": "application/json"})
//     .end(JSON.stringify(characterFilter))
   

// }
// }).listen(3001)



// if(character){
  //   res.writeHead(200,{ "Content-Type":"application/json" })
  //   return res.end(JSON.stringify(characterFilter))
  // }
  // else{
  //   res.writeHead(400,{"Content-Type":"aplication/json"});
  //   return res.end(JSON.stringify({ error: "Character not found" }));

  // }
 
