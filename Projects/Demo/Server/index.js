const express = require('express');

const app = express();

app.get('/home', (req,res) => {
    return res.json('Hello World!')
});

app.listen(process.env.PORT, ()=> {
    console.log(`Example app listening on port ${process.env.PORT}!`);
});