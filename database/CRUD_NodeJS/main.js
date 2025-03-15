const MySQL = require("mysql2");

const connection = MySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Concreto.19",
    database: "nodejs"
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        console.error(err);
    };
    console.log("conected to MySQL!");
});

function createUser(name, email, password, callback) {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    connection.query(sql, [name, email, password], (err, result) => {
        if (err) {
            console.error("Error inserting user:", err);
            return callback(null, err);
        };
        callback(null, "User inserted successfully!");
    });
}

function readUsers(callback) {
    const sql = "SELECT * FROM users";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error reading users:", err);
            return callback(err, null);
        };
        callback(null, {"Users: ": results});
    });
}

function updateUser(id, newName, newEmail, newPassword, callback) {
    let sql;
    let params = [];

    if (newName && newEmail && newPassword) {
        sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
        params = [newName, newEmail, newPassword, id];
    } else if (newName && newEmail) {
        sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
        params = [newName, newEmail, id];
    } else if (newName && newPassword) {
        sql = "UPDATE users SET name = ?, password = ? WHERE id = ?";
        params = [newName, newPassword, id];
    } else if (newEmail && newPassword) {
        sql = "UPDATE users SET email = ?, password = ? WHERE id = ?";
        params = [newEmail, newPassword, id];
    } else if (newName) {
        sql = "UPDATE users SET name = ? WHERE id = ?";
        params = [newName, id];
    } else if (newEmail) {
        sql = "UPDATE users SET email = ? WHERE id = ?";
        params = [newEmail, id];
    } else if (newPassword) {
        sql = "UPDATE users SET password = ? WHERE id = ?";
        params = [newPassword, id];
    }

    connection.query(sql, params, (err, result) => {
        if (err) {
            console.error("Error updating user:", err);
            return callback(null, err);
        };
        callback(null, "User updated successfully!");
    });
};

function deleteUser(id, callback) {
    const sql = "DELETE FROM users WHERE id = ?";

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error deleting user:", err);
            return callback(null, err);
        };
        callback(null, "User deleted successfully!");
    });
}

module.exports = { createUser, readUsers, updateUser, deleteUser };