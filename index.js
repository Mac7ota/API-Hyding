const express = require('express');
const server = express();
const Programacao = require('./src/data/Programação.json')
const port = process.env.PORT || 3000


server.get('/Programacao',(req,res) => {
    return res.json({Programacao})
})

server.listen(port,() =>{
    console.log("Server On");
});

