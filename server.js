const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/dist/CURD/'))

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/CURD/index.html'))
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Project is running on localhost:3000")
})