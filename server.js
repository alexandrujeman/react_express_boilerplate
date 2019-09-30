const express = require('express')

const app = express()

// Node connection
const hostname = '0.0.0.0'
const port = 5000
app.listen(port, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${port} 
Server started.`)
})
