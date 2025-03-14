const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {
        "cpf": 1234,
        "name": "Predo Git",
        "age": 26
    },
    {
        "cpf": 12345,
        "name": "Bruno Henrique",
        "age": 17
    },
    {
        "cpf": 123456,
        "name": "João",
        "age": 16
    },
    {
        "cpf": 1234567,
        "name": "Henderson Usuário é Burro",
        "age": 26
    },
    {
        "cpf": 312,
        "name": "Henderson",
        "age": 26
    }
];

app.get("/", (req, res) => {
    res.status(200).json({"body": users});
});

app.post("/", (req, res) => {
    const cpf = req.body.cpf;
    const name = req.body.name;
    const age = req.body.age;

    users.push({cpf: cpf, name, age});

    res.status(200).json({"body": `Register user ${name} successfully`});
});

app.put("/", (req, res) => {
    const { cpf, name, age } = req.body;
    const user = users.findIndex(user => user.cpf === cpf);

    if (user !== -1) {
        users[user].name = name;
        users[user].age = age;

        res.status(200).json({"body": `Update user name ${name} and age ${age} successfully`});
    };
});

app.delete("/:cpf", (req, res) => {
    const cpf = parseInt(req.params.cpf);

    const user = users.findIndex(user => user.cpf === cpf);

    if (user !== -1) {
        users.splice(user, 1);
        res.status(200).json({"body": `CPF ${cpf} deleted successfully`});
    } else {
        res.status(404).json({ erro: "User not found" });
    };
});

app.listen(port)