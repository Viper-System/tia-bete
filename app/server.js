const http      = require("http");
const express   = require("express");

const port = 3000
const ip = 'localhost';

const app = express();

app.get("/", function(req, res) {

    //Esta será uma resposta que enviará ao navegador, uma página
    //Se rodar como está agora com esses ???? = retornará erro na página
    res.sendFile(path.join(__dirname + '/public/??????.html'))
});

app.listen(port, ip, () => {

    console.log("#########################################")
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c')
    console.log("#########################################")

})



    






