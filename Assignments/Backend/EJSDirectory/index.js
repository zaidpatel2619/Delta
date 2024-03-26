const express = require("express");
const app = express();
const path = require("path");
const port = 8080;


app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/dice', (req, res) => {
    let firstDice = Math.ceil(Math.random() * 6);
    let secondDice = Math.ceil(Math.random() * 6);
    res.render("rollDice.ejs", { num: firstDice, secondDice });
});

app.get("/ig/:username", (req, res) => {
    const followers = ["Mark", "Steve", "Elon"];
    let { username } = req.params;
    let instaData = require("./data.json");
    let userData = instaData[username];
    if (userData) {
        res.render("ig.ejs", { username, followers, data: userData });
    } else {
        res.render("error.ejs");
    }
});

app.get("/*", (req, res) => {
    res.render("error.ejs");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
