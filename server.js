import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import shopRoutes from './routes/shop.js';
import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js'

const app = express();

app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
// Define a simple route

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/auth',authRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found');
})

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
.connect(MONGO_URI)
    .then((result) => {
        
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.log(err);
});
// Start the server on port 3000

