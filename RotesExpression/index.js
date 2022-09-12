const express= require("express");

const app= express();

app.get("/", function(req, res){
    res.send("Olá, tudo bem?");
});
app.get("/contato", function(req, res){
    res.send("Pagina de cumprimento")
})
app.listen(8080)