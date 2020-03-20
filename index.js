const express = require('express')

const app = express()

app.use(express.static('static'))

app.get('/', (req, res) => {
   res.send('<h1>I can build you anything!</h1>')

})

app.get('/about', (req, res) => {
   res.send(`<h1>This is the art of Jäger contracting</h1>
        <div>
          <img src="/img/fusion.jpeg" >
        </div> `)

})

app.get('/contact', (req, res) => {
   res.send('<h1>damienyule@gmail.com</h1>')

})


app.listen(3000, () => {
  console.log('server is runnning on http://www.localhost:3000/ to stop server press control+c')

})
