const mongoose = require("mongoose");

main().then(console.log('Connection Successfull')).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new mongoose.Schema({
    item: String,
    price: Number,
});
const Order = mongoose.model("Order", orderSchema);

const customerSchema = new mongoose.Schema({
    name: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order" 
        }
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log('Pre initiated');
// });

customerSchema.post("findOneAndDelete", async (data) => {
    if (data.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: data.orders }});
        console.log('post initiated', res);
    }
});

const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    let cust3 = new Customer({
        name: 'Prem',
    });

    // let order1 = await Order.findOne({ item: "Chips"});
    // let order2 = await Order.findOne({ item: "Chocolate"});
    let order3 = new Order({
        item: "Burger",
        price: 250,  
    });

    cust3.orders.push(order3);
    // cust1.orders.push(order2);
    // let result = await cust1.save();
    await order3.save();
    await cust3.save();
    console.log('result');
};

// addCustomer();

// const addOrders = async () => {
//     let result = await Order.insertMany([
//         { item: 'Samonsa', price: 12 },
//         { item: 'Chips', price: 10 },
//         { item: 'Chocolate', price: 40 },
//     ]);
//     console.log('result', result);
// };

// addOrders();

// const findCustomer = async () => {
//     let result = await Customer.find({}).populate("orders");
//     console.log('result', result[0]);
// }

// findCustomer();

const deleteCust = async () => {
    let data = await Customer.findByIdAndDelete('662ce3fce30b872dd6f87eed');
    console.log(data);
};

deleteCust();