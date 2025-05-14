const express = require("express");
const cors = require("cors");
const database = require("better-sqlite3");
const db = database("database.db");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

function createTable() {
    db.exec(`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(100), password VARCHAR(18))`);
};

app.get("/", (req, res) => {
    res.json(db.prepare("SELECT * FROM users").all());
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.prepare(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`).run(name, email, password);

    res.json(db.prepare("SELECT * FROM users").all());
});

app.put("/", (req, res) => {
    const id = req.body.id;
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPassword = req.body.password;

    let sql;
    let params = [];
    let query = "UPDATE users SET ";

    Object.keys(req.body).forEach((key,index) => {
        if(req.body[key] && key !== "id"){

            params.push(req.body[key]);

            if(index == key.length - 1){
                query += `${key} = ?`;
            } else {
                query += `${key} = ?, `;
            }
        }
    })
    
    query = query.substring(0, query.length-2) + " "; // Isso que eu adicionei
    params.push(id);
    query += "WHERE id = ?";
    
    db.prepare(query).run(params);
    res.json(db.prepare("SELECT * FROM users").all());
    
    // res.json({"query":  query, "params": params});

    // req.body.forEach(element => {
    //     if(!element === null){
    //         arrayPramsNulls[element] = "?";
    //         params.push(element);
    //     }
        
    // });

    

    // if (newName && newEmail && newPassword) {
    //     sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
    //     params = [newName, newEmail, newPassword, id];
    // } else if (newName && newEmail) {
    //     sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    //     params = [newName, newEmail, id];
    // } else if (newName && newPassword) {
    //     sql = "UPDATE users SET name = ?, password = ? WHERE id = ?";
    //     params = [newName, newPassword, id];
    // } else if (newEmail && newPassword) {
    //     sql = "UPDATE users SET email = ?, password = ? WHERE id = ?";
    //     params = [newEmail, newPassword, id];
    // } else if (newName) {
    //     sql = "UPDATE users SET name = ? WHERE id = ?";
    //     params = [newName, id];
    // } else if (newEmail) {
    //     sql = "UPDATE users SET email = ? WHERE id = ?";
    //     params = [newEmail, id];
    // } else if (newPassword) {
    //     sql = "UPDATE users SET password = ? WHERE id = ?";
    //     params = [newPassword, id];
    // }

    // db.prepare(sql).run(params);

});

app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    db.prepare("DELETE FROM users WHERE id = ?").run(id);

    res.json(db.prepare("SELECT * FROM users").all());
});

app.listen(port);