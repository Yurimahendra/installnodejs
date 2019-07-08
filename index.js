const express = require ('express')
const app = express()

app.get ('/',(req, res) => res.send('Hello express !'))
app.get ('/about', (req, res) => res.send ('Express is express'))

app.listen (3000, () => console.log('Hello world app berjalan di http://localhost:3000'))