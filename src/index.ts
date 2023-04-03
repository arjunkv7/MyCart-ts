import express from 'express';
import config from './config/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

let app = express();
let port = config.PORT;
app.use(bodyParser.json());
app.use(cors());

import userRouter from './routes/user'
app.use('/', userRouter);

import productRouter from './routes/product'
app.use('/product', productRouter);

mongoose.connect(config.DB_URL)
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.log(err.message))

app.listen(port, () => {
    console.log(`app is running on port ${port}.`)
});
