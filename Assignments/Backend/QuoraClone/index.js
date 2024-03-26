const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const port = 8080;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

let postData = [
    {
        id: uuidv4(),
        username: 'Killmonger',
        post: 'Bow to the new king'
    },
    {
        id: uuidv4(),
        username: 'Thanos',
        post: 'I am inevitable'
    },
    {
        id: uuidv4(),
        username: 'Loki',
        post: 'For Glorious Purpose'
    },
    {
        id: uuidv4(),
        username: 'Ultron',
        post: 'Everyone Creates The Thing They Dread'
    },
];

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get('/posts', (req, res) => {
    res.render("home.ejs", { postData });
});

app.get('/posts/new', (req, res) => {
    res.render("newpost.ejs");
});

app.post('/posts', (req, res) => {
    const { username, post } = req.body;
    let newId = uuidv4();
    postData.splice(0, 0, { username: username, post: post, id: newId });
    res.redirect("/posts");
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    let post = postData.find(f => id === f.id);
    res.render("show.ejs", { post, id });
});

app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    let post = postData.find(f => id === f.id);
    res.render("editpost.ejs", { post, id });
});

app.patch('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { username, post } = req.body;
    let foundPost = postData.find(f => id === f.id);
    foundPost.post = post;
    res.redirect(`/posts/${id}`);
});

app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    let foundPost = postData.find(f => id === f.id);
    let index = postData.indexOf(foundPost);
    postData.splice(index, 1);
    res.redirect(`/posts`);
});