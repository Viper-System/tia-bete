const express    = require("express");
const bodyParser = require('body-parser')

const app = express();

const port = 3000
const ip = 'localhost';


// BODY-PARSER PROPS
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// EXPRESS GETS e POSTS
//Mostrar page - HOME
app.get("/home", function(req, res) {

    res.sendFile(__dirname + '/public/index.html')

});

//Mostrar page - INFORMAÇÕES
app.get("/info", function(req, res) {

    res.sendFile(__dirname + '/public/info.html')

});

//Rota que calcula a Glicose com Carboidrato e retorna o valor da Insulina
app.post("/calc", function(req, res) {

    var glico = req.body.glicose;
    var carbo = req.body.carboidratos;
    
    var insulina;
    
    insulina = glico / carbo;

    var resultado = Math.round(insulina)

        if (resultado > 10) {
            res.send(`Vá em um posto médico!`)
        } else {
            res.send('<h1>'+resultado+"<h1>")
        }       

})



//Mostrar page - DISPONIBILIDADE DE CENTROS DE SAÚDE
app.get("/dispo", function(req, res) {

    res.sendFile(__dirname + '/public/dispo.html')

});







app.listen(port, ip, () => {

    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    console.log("■                 Servidor Inicializado!!                    ■")
    console.log(`■ 1) Para Acessar o Servidor: http://${ip}:${port}/home     ■`)
    console.log("■ 2) Para Derrubar o Servidor: ctrl + c                      ■")
    console.log("■ 3) Para Reiniciar o Servidor: rs                           ■")
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")

})







    






