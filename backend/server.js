const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose'); 

mongoose.set('useCreateIndex', true)
mongoOptions = {useNewUrlParser: true};
corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
mongoose.connect("mongodb://localhost:27017/tododb", mongoOptions) 
    .then(mongo =>{
        console.log("connected to database")
    }) 
    .catch(err =>{
        console.log("There was an error in connecting to database")
    }); 

const server = express();

server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json());

const todoController = require('./todoController');

server.use('/api/todos', todoController);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5555;
server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
