const path = require("path");
const fs = require("fs")
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }))



app.get("/", function(req, res){
    res.send("Bem vindo!");
});


app.get("/calebe", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/calebe", function(req, res){
    const caminhoDoArquivo = path.join(__dirname, "index.html")
    const arquivo = fs.readFileSync(caminhoDoArquivo);
    const texto = arquivo.toString("utf-8")
    const textoComNome = texto.replace("Coloque seu nome!", req.body.nome)
    res.send(textoComNome);
})


app.listen(8081, function(){
    console.log("Servidor rodando")
});