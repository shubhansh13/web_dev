const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 3000
// middlewares
app.use(bodyParser.json({}));
app.post('/', function(req,res){
    console.log(req.body)
    res.send('Hello World!')
})

app.post('/conversations', function(req,res) {
    console.log(req.headers["authorization"])
    res.send({
        msg: "2 + 2 = 4"
    }) 
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})
