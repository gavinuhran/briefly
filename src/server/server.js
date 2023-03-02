import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 80;
  
app.get('/', async (req, res, next) => {
    try {
        res.send('Hello world');
    } catch (err) {
        res.status(500).send({error: 'Internal server error' });
    }
})

// const MONGO_DB_URI = process.env.MONGO_DB_URI;

// mongoose.connect(MONGO_DB_URI, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });

// mongoose.connection.on('open', () => {
//     console.log('Connected to MongoDB database.');
// });

app.listen(PORT, () => {
    console.log(`Briefly server listening on port ${PORT}`);
})