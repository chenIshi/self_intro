const express = require('express')
const app = express()
const port = 65501

app.listen(port,() => {
    console.log('Listening on port ${port}')

})
