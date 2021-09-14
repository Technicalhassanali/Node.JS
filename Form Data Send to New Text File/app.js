const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;
app.set('view engine', 'pug');
// app.use(express.urlencoded());//get data from the server url
app.use(express.urlencoded({ extended: true }))
app.use('/static',express.static('static'));
// app.get('/',callback);

app.get('/',(req,res)=>{
    var heading = "Form Design";
    var con = "Dummy";
    var params = {heading,con};
    res.status(400).render("index.pug",params);
});
app.post('/',(req,res)=>{
    var first_name = req.body.firstname;
    var second_name = req.body.secondname;
    var age = req.body.age;
    var message = req.body.messages;
fs.writeFile('index.txt',`${first_name},${second_name},${age},${message}`,(err,data)=>{
    console.log("Data is Add");
});
    var heading = "Form Design";
    var con = "Dummy";
    var params = {heading,con};
    res.status(400).render("index.pug",params);
});
// app.get();
// app.post();
app.listen(port,()=>{
    console.log(`Your Server is Running on Port : ${port}`);
})