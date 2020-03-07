const express = require('express')

const app = express()

app.get('/', (req, res) => {
   res.send('<h1>Hire me! I can build you anything!</h1>')

})

app.listen(3000, () => {
  console.log('server is runnning on http://www.localhost:3000/ to stop server press control+c')

})
