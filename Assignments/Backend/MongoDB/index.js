const mongoose = require("mongoose");

main()
    .then((res) => console.log('Connection Success!'))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Employee = mongoose.model("Employee", userSchema);

const user1 = new Employee({
    name: "Adam",
    email: "adam@hotmail.com",
    age: 1
});

// user1.save().then((res) => console.log('response', res))
// .catch((err) => console.log(err));


// Employee.find({ age: { $gt: 1 }}).then((res) => console.log('response: ',res)).catch((err) => console.log(err));

// Employee.insertMany([
//     {
//         name: "Ruzain",
//         email: "ruzain@mail.com",
//         age: 5
//     },
//     {
//         name: "Hamza",
//         email: "hamza@mail.com",
//         age: 2
//     },
//     {
//         name: "Umar",
//         email: "umar@mail.com",
//         age: 5
//     },
//     {
//         name: "Liza",
//         email: "liza@mail.com",
//         age: 6
//     }
// ]).then((res) => console.log('response', res))
// .catch((err) => console.log(err));

// Employee.updateOne({ name: 'Adam'}, { age: 50}).then(res => console.log(res)).catch(err => console.log(err));

// Employee.updateMany({ age: 2}, { age: 4}).then(res => console.log(res)).catch(err => console.log(err));

// Employee.findOneAndUpdate({ name: 'Adam' }, { age: 72}, { new: true }).then(res => console.log(res)).catch(err => console.log(err));

// Employee.findByIdAndUpdate('65b3a6b8c76616817009f12c', { age: 2}, { new: true }).then(res => console.log(res)).catch(err => console.log(err));

// Employee.deleteOne({ name: 'Adam'}).then(res => console.log(res)).catch(err => console.log(err));

// Employee.deleteMany({ age: 4}).then(res => console.log(res)).catch(err => console.log(err));

// Employee.findOneAndDelete({ age: 2 }).then(res => console.log(res)).catch(err => console.log(err));

// Employee.findByIdAndDelete('65c8734ecfb4deeb1fef685f').then(res => console.log(res));

