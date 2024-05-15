const mongoose = require("mongoose");

main().then(console.log('Connection Successfull')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "Sherlock Homles",
        addresses: [
            {
                location: "221B blakers Street",
                city: "london"
            },
        ]
    });

    user1.addresses.push({ location: "P32 Wall street", city: "london" });
    let result = await user1.save();
    console.log('result', result);
};

addUser();