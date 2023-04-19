const http = require("http");
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")
// const character = require("./utils/data");


http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
let id = req.url.split('/').at(-1);
  if(req.url.includes('onsearch')){
    getCharById(res, id)
  }

  if(req.url.includes('detail')){
   getCharDetail(res, id)
  }


}).listen(3001, 'localhost')
















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
 
