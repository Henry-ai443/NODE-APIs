require('dotenv').config();
const express =require('express');
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(express.json());

app.use('/contacts', contactRoutes);

//TEST ROUTE 
app.get('/', (req, res) => {
    res.send('Welcome to contact Manager API with MariaDb + dotenv + MVC!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})