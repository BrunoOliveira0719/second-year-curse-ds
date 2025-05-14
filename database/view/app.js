const database = require("better-sqlite3")
const db = database("./database.db")

function create(sql) {
    db.exec(sql)
};

function SQL(sql) {
    return db.prepare(sql)
};

// create("CREATE TABLE autores (id INTEGER PRIMARY KEY,nome TEXT NOT NULL)")
// create("CREATE TABLE editoras (id INTEGER PRIMARY KEY,nome TEXT NOT NULL)")
// create("CREATE TABLE livros (id INTEGER PRIMARY KEY,titulo TEXT NOT NULL,autor_id INTEGER,editora_id INTEGER,ano_publicacao INTEGER,paginas INTEGER,preco REAL,FOREIGN KEY (autor_id) REFERENCES autores(id),FOREIGN KEY (editora_id) REFERENCES editoras(id))")
// create("CREATE TABLE emprestimos (id INTEGER PRIMARY KEY,livro_id INTEGER,data_emprestimo TEXT,data_devolucao TEXT,FOREIGN KEY (livro_id) REFERENCES livros(id))")

// SQL("INSERT INTO autores (nome) VALUES ('Machado de Assis')")
// SQL("INSERT INTO autores (nome) VALUES ('Clarice Lispector')")
// SQL("INSERT INTO autores (nome) VALUES ('Jorge Amado')")

// SQL("INSERT INTO editoras (nome) VALUES ('Companhia das Letras')")
// SQL("INSERT INTO editoras (nome) VALUES ('Editora Rocco')")
// SQL("INSERT INTO editoras (nome) VALUES ('Record')")

// SQL("INSERT INTO livros (titulo, autor_id, editora_id, ano_publicacao, paginas, preco) VALUES ('Dom Casmurro', 1, 1, 1899, 256, 39.90)")
// SQL("INSERT INTO livros (titulo, autor_id, editora_id, ano_publicacao, paginas, preco) VALUES ('A Hora da Estrela', 2, 2, 1977, 96, 29.90)")
// SQL("INSERT INTO livros (titulo, autor_id, editora_id, ano_publicacao, paginas, preco) VALUES('Capitães da Areia', 3, 3, 1937, 280, 34.90)")

// SQL("INSERT INTO emprestimos (livro_id, data_emprestimo, data_devolucao) VALUES (1,'2025-04-01', '2025-04-10')")
// SQL("INSERT INTO emprestimos (livro_id, data_emprestimo, data_devolucao) VALUES (2, '2025-04-05', '2025-04-12')")
// SQL("INSERT INTO emprestimos (livro_id, data_emprestimo, data_devolucao) VALUES (1, '2025-04-15', NULL)")

// console.log(create("CREATE VIEW LivrosEditoraAutor AS SELECT livros.titulo, autores.nome, editoras.nome FROM livros INNER JOIN autores ON livros.autor_id = autores.id INNER JOIN editoras ON livros.editora_id = editoras.id"))
// console.log(SQL("SELECT * FROM LivrosEditoraAutor").all())


// create("CREATE VIEW Livros1950 AS SELECT * FROM Livros WHERE ano_publicacao >= 1950")
// console.log(SQL("SELECT * FROM Livros1950").all())

create("CREATE VIEW MediaPaginasAutor AS SELECT autores.nome AS nome_autor, AVG(livros.paginas) AS media_paginas FROM livros JOIN autores ON livros.autor_id = autores.id GROUP BY autores.nome")
console.log(SQL("SELECT * FROM MediaPaginasAutor").all())