const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require("./routes/product");
const usersRoutes = require("./routes/user");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', productsRoutes);
app.use('/api', usersRoutes);

//routes
app.get('/', (req, res) => {
    res.send('My API')
})

// mongodb conexion

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('conexión OK'))
.catch((error) => console.error(error));

app.listen(port, ()=> console.log('puerto: ', port));