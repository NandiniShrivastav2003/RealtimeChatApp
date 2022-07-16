const http=require('http');
const express=require('express');
const app=express();
const server=http.createServer(app);
//setting upsocket
const socketio=require('socket.io');
const io=socketio(server)

io.on("connection",(socket)=>{
   console.log('connect with socket id:',socket.id);
   socket.on('msg_send',(data)=>{
//      console.log('received ',data);
    
//    })
socket.broadcast.emit('msg_rcvd',data);
})
})
//include public folder in app
//1st way 
app.use('/', express.static(__dirname  +'/public'));

//2nd way
// app.use(express.static('public'));
// app.get('/',function(req,res) {
//     res.sendFile('index.html');
//   });
server.listen(2000,()=>{
    console.log('server is running on:http://localhost:2000')
})