//imports

let express = require('express')
let bodyParser = require('body-parser');
let apiRouter = require('./apiRouters').router;


//instanciation du serveur

let server = express();

//body parse configuration

server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());


//configuration des routes

server.get('/', function (req, res){
res.setHeader('content-type',  'text/html')
res.status(200).send('<h1>Bienvenu dans mon univers</h1>')

});

server.use('/api/', apiRouter);



//lancemant du serveur

server.listen(8000, function(){
    console.log('Le serveur est lancer');
})