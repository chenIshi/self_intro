const express = require('express')
const app = express()
const port = 60000

app.listen(port,() => {
    console.log('Listening on port'+ port);

})

app.use(express.static(__dirname + '/public'))

app.get('/get', function(req, res) {

  res.send('<h1>Hello, ' + req.query.fname + req.query.lname + '</h1>');

});

app.get("/ajax_data", function(req, res) {
  res.send("Ajax!")
})
/*
app.get("/ajax_comment", function(req, res) {
  res.send(`${req.query.user_comment}`)
})
*/
