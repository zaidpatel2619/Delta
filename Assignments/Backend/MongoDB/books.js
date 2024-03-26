const mongoose = require('mongoose');

main()
.then(res => console.log('Connection Successfull'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/books");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, 'Price cannot be negative']
    },
    discount: {
        type: Number,
        default: 0
    }
});

const Books = mongoose.model('Books', bookSchema);

// const maths = new Books({
//     title: 'Mathematics XII',
//     author: 'R D Sharma',
//     price: 299
// });

// maths.save().then((res) => console.log('response', res))
// .catch((err) => console.log(err));

// Books.insertMany([
//     {
//         title: 'Game of Thrones',
//         author: 'R R Martin',
//         price: 1099
//     }, 
//     {
//         title: 'House of the Dragons',
//         author: 'R R Martin',
//         price: 999
//     }, 
//     {
//         title: 'Marvel Comics',
//         price: '399'
//     }, 
//     {
//         title: 'Mathematics IX',
//         author: 'Chetan Bhagat'
//     }
// ]);

Books.findByIdAndUpdate('65c87eafdb30568558180beb', { price: -49 }, { runValidators: true }).then(res => console.log(res)).catch(err => console.log(err.errors.price.properties.message));