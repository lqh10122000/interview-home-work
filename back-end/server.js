import express from 'express';
import dotenv from 'dotenv'; 
import mongoose from 'mongoose';
import routeBlog from './routers/Blog.js';
import routeLogin from './routers/Login.js';
import routeRegister from './routers/Register.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = express();
server.use(cors());



dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URL;


// server.use(express.json({ limit: '30mb' }));
// server.use(express.urlencoded({ extended: true, limit: '30mb' }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());


server.use('/blog', routeBlog);
server.use('/login', routeLogin);
server.use('/register', routeRegister);




mongoose
    .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to DB!');
        
        server.listen(PORT, () => console.log(`server listening ${PORT}`));
    })
    .catch((err) => {console.log("Err : ", err)});