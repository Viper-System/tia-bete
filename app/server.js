const express    = require("express");
const bodyParser = require('body-parser')

const app = express();

const port = 3000
const ip = 'localhost';

app.use(express.static('public'))


// BODY-PARSER PROPS
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// EXPRESS GETS e POSTS
//Mostrar page - HOME
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    res.sendFile(__dirname + '/public/index.css');    
});


//Mostrar page - DISPONIBILIDADE DE CENTROS DE SAÚDE
app.get("/centro", (req, res) =>{
    res.sendFile(__dirname + '/public/centro.html')   
});






app.listen(port, ip, () => {

    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    console.log("■                 Servidor Inicializado!!                    ■")
    console.log(`■ 1) Para Acessar o Servidor: http://${ip}:${port}/home     ■`)
    console.log("■ 2) Para Derrubar o Servidor: ctrl + c                      ■")
    console.log("■ 3) Para Reiniciar o Servidor: rs                           ■")
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")

})