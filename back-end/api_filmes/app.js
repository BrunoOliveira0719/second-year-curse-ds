const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const movies = require("./movies.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json(movies);
});

app.post("/", (req, res) => {

});

app.put("/", (req, res) => {

});

app.delete("/", (req, res) => { 

});

app.listen(port, (err, response) => {
    if (err) {
        console.error("Error init server:", err);
        console.error(err);
    };
    console.log(`Init server in port: ${port}`);
});