require('dotenv').config();
const express =require('express');
const db = require('./config/db');
const contactRoutes = require("./routes/contactRoutes");

const app = express();

//MIDDLEWARE
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/contacts', contactRoutes);

//TEST ROUTE 
app.get('/', (req, res) => {
    res.send('Welcome to contact Manager API with MariaDb + dotenv + MVC!');
});


const PORT = process.env.PORT || 5000;

//START THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})