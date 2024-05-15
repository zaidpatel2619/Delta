const mongoose = require("mongoose");

main().then(console.log('Connection Successfull')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new mongoose.Schema({
   username: String,
   email: String
});
const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
    content: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user1 = await User.findOne({ username: "Rahul" }); 
    let post2 = new Post({
        content: "Bye Bye!",
        likes: 3
    });
    let post1 = await Post.findOne({ likes: 7 });
    post1.user = user1;
    // post2.user = user1;
    await post1.save();
};
 addData();