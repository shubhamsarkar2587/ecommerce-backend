const express = require('express');
const cors = require('cors')
const connectDB = require('./db/connect');
require('dotenv').config();

// express init
const app = express();
app.use(cors())

// middleware
app.use(express.json());

// routes
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");
const orderRoutes = require("./routes/order.route");
const paymentRoutes = require("./routes/payment.route");

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/carts', cartRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/payments', paymentRoutes);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB_URI)
        app.listen(port, () => console.log(`listening to port ${port} ...`))
    } catch (err) {
        console.log(err);
    };
};

start();
