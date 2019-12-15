const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>hello world!</h1>')
})
app.get('/home', (req, res) => {
    res.json({
        name: 'jdy',
        age: '28'
    })
})

app.listen('9080', () => {
    console.log('server app has been started at port "9080"!')
})