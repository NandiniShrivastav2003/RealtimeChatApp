const express=require('express');
const app=express();



//include public folder in app
//1st way 
app.use('/', express.static(__dirname  +'/public'));
//2nd way
// app.use(express.static('public'));
// app.get('/',function(req,res) {
//     res.sendFile('index.html');
//   });
app.listen(2000,()=>{
    console.log('server is running on:http://localhost:2000')
})