import express from 'express';
import {login} from '../controllers/Auth.js';

const router = express.Router();

router.get('/', function(req, res){

    res.send("here is login");

});

router.post('/', login);


export default router;