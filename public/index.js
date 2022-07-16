let socket=io();

let btnSend=document.getElementById('btnSend');
let inpmsg=document.getElementById('newmsg');
let ulMsgList=document.getElementById('ulMsgList');
btnSend.onclick = function(){
    socket.emit('msg_send',{
        msg: inpmsg.value
        
    })
    
}
socket.on('msg_rcvd',(data)=>{
    let li=document.createElement('li');
    li.innerText=data.msg
    ulMsgList.appendChild(li);
})
