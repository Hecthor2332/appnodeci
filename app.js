const express = require('express');

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})