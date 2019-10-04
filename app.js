const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.info("User connected");

    socket.on('joined', function (message) {
        console.log(message);
        io.emit('chat message', message);
    });
    

    socket.on('chat message', function (message) {
        console.log(message);
        io.emit('chat message', message);
    });
});

server.listen(4000);