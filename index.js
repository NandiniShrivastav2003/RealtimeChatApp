const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
//setting upsocket
const socketio = require('socket.io');
const io = socketio(server)

let users={
    'nandini':'2208',
}

io.on("connection", (socket) => {
    console.log('connect with socket id:', socket.id);
    socket.on('login', (data) => {
      
        if(users[data.username]){
         if(data.password == users[data.username]){
            socket.join(data.username);
            socket.emit('logged-in');
         }
         else{
            socket.emit('login-failed');
         }
        }
        else{
            socket.join(data.username);
            socket.emit('logged-in');
            users[data.username]=data.password;
            
            
        }
        
    })
    socket.on('msg-send', (data) => {
      
        if (data.to) {
            io.to(data.to).emit('msg_rcvd', data);
        }
        else {
            io.emit('msg_rcvd', data);
        }

    })
})
//include public folder in app
//1st way 
app.use('/', express.static(__dirname + '/public'));

//2nd way
// app.use(express.static('public'));
// app.get('/',function(req,res) {
//     res.sendFile('index.html');
//   });
server.listen(2000, () => {
    console.log('server is running on:http://localhost:2000')
})