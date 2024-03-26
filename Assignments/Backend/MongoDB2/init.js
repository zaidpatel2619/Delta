const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then(res => console.log("Coonection Successfull!")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chattingApp');
}

let chats = [
    {
        from: 'Riya',
        to: 'Ritu',
        message: 'Send notes',
        created_at: new Date()
    },
    {
        from: 'Mohit',
        to: 'Ritu',
        message: 'Hi',
        created_at: new Date()
    },
    {
        from: 'Ritu',
        to: 'Riya',
        message: 'le notes',
        created_at: new Date()
    },
    {
        from: 'Rohit',
        to: 'Mohit',
        message: 'Nahi degi',
        created_at: new Date()
    },
    {
        from: 'Mohit',
        to: 'Rohit',
        message: 'BSDK',
        created_at: new Date()
    },
    {
        from: 'Ritu',
        to: 'Mohit',
        message: 'I have a bf',
        created_at: new Date()
    }
];

Chat.insertMany(chats);
