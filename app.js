var express = require('express')
var app = express ();
 
app.get("/", (req, res) =>{
res.send("página principal")

})

app.listen(3000, () =>{
    console.long("ligando o servidor")

})