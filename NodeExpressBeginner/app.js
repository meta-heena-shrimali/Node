const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello There ....')
})
app.get('/alien', (req, res) => {
    const id = req.query.id // query in URL like /alien?id=20 
    res.send('Welcome Back Alien ' + id)
})
app.get('/alien/:id', (req, res) => {
    const id = req.params.id // parameter in URL like /alien/20
    res.send('Welcome Back ' + id)
})
app.listen(9000, (req, res) => {
    console.log('Server Started...')
});