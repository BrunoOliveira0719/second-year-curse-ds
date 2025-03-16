const { createUser, readUsers, updateUser, deleteUser } = require("../../database/CRUD_NodeJS/table_user/main");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    const response = readUsers((err, response) => {
        if (err) {
            res.status(500).json({ "error": "Error fetching users", "details": err });
        } else {
            res.status(200).json(response);
        }
    });
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const response = createUser(name, email, password, (err, response) => {
        if (err) {
            res.status(500).json({ "error": "Error creating user", "details": err });
        } else {
            res.status(200).json(response);
        }
    });
});

app.put("/", (req, res) => {
    const { id, name, email, password } = req.body;

    const response = updateUser(id, name, email, password, (err, response) => {
        if (err) {
            res.status(500).json({ "error": "Error updating user", "details": err });
        } else {
            res.status(200).json(response);
        };
    });
});

app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const response = deleteUser(id, (err, response) => {
        if (err) {
            res.status(500).json({ "error": "Error deleting user", "details": err });
        } else {
            res.status(200).json(response);
        }
    });
});

app.listen(port)