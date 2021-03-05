let express = require('express')
let { createServer } = require('http')

let app = express();
let server = createServer(app)

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index2.html')
})

server.listen(8091, () => {
  console.log(8091)
})