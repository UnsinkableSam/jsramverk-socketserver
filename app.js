const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongo = require('./models/mongo.js');
let messages;

    mongo.getAll().then((res) => {
        messages = res;
    })

io.on('connection', function (socket) {
    console.info("User connected");
    console.log(messages);
    io.emit('load', messages);
    
    socket.on('joined', function (message) {
        console.log(message);
        io.emit('chat message', message);
    });
    

    socket.on('chat message', function (message) {
        console.log(message);
        io.emit('chat message', message);
        messages.push(message);
        mongo.addCollection(messages);
        
        
        
    });
});

server.listen(4000);