const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main().then(res => console.log("Coonection Successfull!")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chattingApp');
}

// let chat1 = new Chat({
//     from: 'Riya',
//     to: 'Ritu',
//     message: 'Send notes',
//     created_at: new Date()
// });

// chat1.save().then(res => console.log(res));

app.get("/", (req, res) => {
    res.send("root is working")
});

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("chats.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
    res.render('newChats.ejs');
});

app.post("/chats", (req, res) => {
    const { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    newChat.save().then(res => console.log('New chat sent successfully!', res)).catch(err => console.log(err));
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { message: newMessage } = req.body;
    await Chat.findByIdAndUpdate(id, { message: newMessage, updated_at: new Date() }, { runValidators: true }).then(res => console.log('Chat updated!', res)).catch(err => console.log(err));
    res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id).then(res => console.log('Chat deleted!', res)).catch(err => console.log(err));
    res.redirect("/chats");
});

app.listen(8080, () => console.log("server is listening to 8080"));
