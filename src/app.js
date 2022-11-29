const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();

// express init
const app = express();

// middleware
app.use(express.json());

// routes
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);


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
