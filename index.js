const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./Database/db");
const testRoute = require('./Route/testRoute')
 
const app = express();
const PORT = 4000;
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', (req, res) => {
    res.send("Welcome to the page")
})

app.use('/user',testRoute);
 
app.get('/notice', (req, res) => {
    res.send("Welcome to the notice")
})
 
app.listen(PORT, () => {
    console.log(`server is running on PORT : ${PORT}`);
})
