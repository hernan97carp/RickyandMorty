const http = require("http");
const data = require("./utils/data");


http
.createServer((req,res)=>{
    res.setHeader('Acces-Control-Allow-Origin', '*')
    const {url} = req;
    if(url.includes("rickyandmorty/character/")){
    const id = url.split("/").at(-1)
    const character = data.find((char)=>char.id == id);
   console.log(id)
   
  if(character){
    res.writeHead(200,{ "Content-Type":"application/json" })
    return res.end(JSON.stringify(character))
  }
  else{
    res.writeHead(400,{"Content-Type":"aplication/json"});
    return res.end(JSON.stringify({ error: "Character not found" }));

  }
 
}
}).listen(3001, "localhost")