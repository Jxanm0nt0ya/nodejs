const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
//buscar cuale son los puertos utilizados para http

app.get("/", (request, response) => {
    response.send("hello world");
})
//buscar los metodos de http (son 4 0 5) metodo: get , post, update, patch,delet
//buscar las diferencias del metodo patch y put
//header y body en metodos con nodejs

app.listen(port, () => {
    console.log(`example app listening on port $(port)`);
})

