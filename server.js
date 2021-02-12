const express = require('express')
const app = express();
const port = 5001;

app.get('/hello', (req, res)=> {
    res.send('hello worlasasassd')
})

app.listen(port, () => {
    console.log("App is listening on Port 5001")
})