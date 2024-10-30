const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
require('dotenv').config();

const app = express();
const port = 5001; // You can change this to your desired port

app.use(cors());
app.use(bodyParser.json());

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: "rzp_test_6VYMw2fVpJUcES",
    key_secret: "WHAmelzVgKqXgfyknAaGV0cH",
});

// Route to create order
app.post('/create-order', async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const options = {
            amount: amount * 100, // Amount in smallest currency unit (paise)
            currency: currency,
            receipt: `receipt#${Math.floor(Math.random() * 100000)}`,
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
