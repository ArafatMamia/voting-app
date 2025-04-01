const express = require('express')
const bodyParser = require('body-parser'); 
const app = express();
require('dotenv').config();

app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})