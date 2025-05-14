const jwt = require("jsonwebtoken");

const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

const secret_key = "1907";

app.use(cors());
app.use(express.json());

const users = [{id: 1, name: "Predo Git", password: "1234", role: "admin"}, {id: 2, name: "Bruno AI", password: "1234", role: "user"}, {id: 3, name: "João Soletrando", password: "1234", role: "user"}];

function generateToken(user, time) {
    return jwt.sign(user, secret_key, {expiresIn: time});
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("")[1];

    if (!token) {
        return res.sendStatus(401);
    };

    jwt.verify(token, secret_key, (err, user) => {
        if (err) {
            return
        }
    })
}
app.get("/users", (req, res) => {
    res.status(200).json({body: users});
})


app.listen(port, (err, response) => {
    if (err) {
        return console.error({"Error init server:": err});
    };
    console.log({"Server is running on port": port});
});