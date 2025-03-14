const MySQL = require("mysql2");

const connection = MySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Concreto.19",
    database: "nodejs"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conectado ao MySQL!");
});

function createUser() {
    const name = "Bruno";
    const email = "bruno@gmail.com";
    const password = "12345";

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    connection.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return;
        }
        console.log("User inserted successfully! ID:", result.insertId);
    });
}

function readUsers() {
    const sql = "SELECT * FROM users";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error reading users:", err);
            return;
        }
        console.log("Users:", results);
    });
}

function updateUser(id, newName, newEmail, newPassword) {
    const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

    connection.query(sql, [newName, newEmail, newPassword, id], (err, result) => {
        if (err) {
            console.error("Error updating user:", err);
            return;
        }
        console.log(`User ${id} updated successfully!`);
    });
}

function deleteUser(id) {
    const sql = "DELETE FROM users WHERE id = ?";

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error deleting user:", err);
            return;
        }
        console.log(`User ${id} deleted successfully!`);
    });
}