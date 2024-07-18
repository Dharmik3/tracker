// const express = require('express');
// const app = express();
// const http = require('http');
// const socketio = require('socket.io');
// const ejs = require('ejs');
// const path = require('path');

// const server = http.createServer(app);
// const io = socketio(server)
// app.set('view engine', "ejs")
// app.use(express.static(path.join(__dirname, 'public')))

// io.on('connection', (socket) => {
//     socket.on("send-location", (data) => {
//         console.log(data)
//         io.emit('receive-location', { id: socket.id, ...data })
//     })
//     socket.on('disconnect', () => {
//         io.emit('user-disconnected', socket.id)
//     })
//     console.log('connected')
// })

// app.get('/', (req, res) => {
//     res.render('index')
// })
// server.listen(3002)






// const express = require('express');
// const app = express();
// const http = require('http');
// const socketio = require('socket.io');
// const ejs = require('ejs');
// const path = require('path');

// const server = http.createServer(app);
// const io = socketio(server)

// // app.set('view engine', "ejs")
// app.use(express.static(path.join(__dirname, 'public')))

// io.on('connection', (socket) => {
//     console.log('User connected:', socket.id)

//     socket.on("send-location", (data) => {
//         console.log(`Location received from ${socket.id}:`, data)
//         io.emit('receive-location', { id: socket.id, ...data })
//     })

//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id)
//         io.emit('user-disconnected', socket.id)
//     })
// })

// app.get('/', (req, res) => {
//     res.render('index')
// })

// server.listen(3002, () => {
//     console.log('Server running on port 3002')
// })

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on("send-location", (data) => {
        console.log(`Location received from ${socket.id}:`, data);
        io.emit('receive-location', { id: socket.id, ...data });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        io.emit('user-disconnected', socket.id);
    });
    socket.on('error', (err) => {
        console.log(socket.id, { err })
    })
});

server.listen(3002, () => {
    console.log('Server running on port 3002');
});
