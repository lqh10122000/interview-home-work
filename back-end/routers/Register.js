import express from 'express';
import {register} from '../controllers/Auth.js';
const router = express.Router();



router.get('/', function(req, res){

    res.send("here is register");
    
});

router.post('/', register);


export default router;