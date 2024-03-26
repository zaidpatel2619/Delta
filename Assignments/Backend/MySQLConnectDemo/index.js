const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const path = require("path");
const methodOverride = require("method-override");
const express = require('express');
const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let randomUser = () => ([
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
]);

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    database: 'delta_app',
    password: 'Mysql@2619'
});

app.get('/', (req, res) => {
    let q = `select count(*) from user`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            let count = result[0]["count(*)"];
            res.render("Home.ejs", { count });
        })
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}
});

app.get('/users', (req, res) => {
    let q = `select * from user`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            res.render("Users.ejs", { users: result });
        })
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}
});

app.get('/user/:id/edit', (req, res) => {
    const { id } = req.params; 
    let q = `select * from user where id = '${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            res.render("EditUser.ejs", { user: result[0] });
        })
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}
});

app.patch('/user/:id', (req, res) => {
    const { id } = req.params; 
    const { username: newUsername, password: formPass } = req.body;
    let q = `select * from user where id = '${id}'`;
    let q2 = `update user set username = '${newUsername}' where id = '${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong pass");
            } else {
                connection.query(q2, (error, result) => {
                    if (error) throw error;
                        res.redirect("/users");
                });
            }
        });
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}
// res.send("updated");
});

app.get("/user/add", (req, res) => {
    res.render("AddNewUser.ejs");
});

app.post("/user/add/new", (req, res) => {
    const { username, email, password } = req.body;
    let user = [faker.string.uuid(), username, email, password];
    let q = `insert into user (id, username, email, password) values (?, ?, ?, ?)`;
    try {
        connection.query(q, user, (error, result) => {
            if (error) throw error;
            res.redirect("/users");
        })
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}
});

app.get("/user/:id/delete", (req, res) => {
    const { id } = req.params;
    let q = `select * from user where id = '${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            res.render("DeleteUser.ejs", { user: result[0] });
        })
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}
});

app.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    console.log('req.body' , req.body);
    let q = `select * from user where id = '${id}'`;
    let q2 = `delete from user where id = '${id}'`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            let user = result[0];
            if (email != user.email || password != user.password) {
                res.send("Invaid username or password");
            } else {
                connection.query(q2, (error, result) => {
                    if (error) throw error;
                        res.redirect("/users");
                });
            }
        });
    } catch (e) {
        console.log(e);
        res.send("some error in db", e);
}

})

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});


// let q = "INSERT INTO USER (id, username, email, password) VALUES (?, ?, ?, ?)";                     -//single user entry
// let user = [1, 'abc', 'abc@mail.com', '1234'];

// let q = "INSERT INTO user (id, username, email, password) VALUES ? ";
// let users = [[2, 'lmn', 'lmn@mail.com', '3456'], [3, 'xyz', 'xyz@mail.com', '5678']];                -//multi user entry
 
// let data = [];
// let q = "INSERT INTO user (id, username, email, password) VALUES ? ";

// for (let i = 0; i < 100; i++) {
//     data.push(randomUser());
// };


// try {
//     // connection.query(q, user, (err, res) => {                                  -//single user entry
//     // connection.query(q, [users], (err, res) => {                                 -//multi user entry
//     connection.query(q, [data], (err, res) => {
//         if (err) throw err;
//         console.log(res);
//     });
// }
// catch (e) {
//     console.log(e);
// }

// connection.end();
