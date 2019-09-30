const express = require('express')

const app = express()

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ]
  res.json(customers)
})

// Node connection
const hostname = '0.0.0.0'
const port = 5000
app.listen(port, hostname, () => {
  console.log(`Listening on ${hostname} 
Waiting for connections on ${port} 
Server started.`)
})
