import {UserModel} from '../models/User.js';
import bcrypt from 'bcrypt';



export const login = async (req, res) =>
{
    console.log("here is login in controller ", req.body);

    const {username, password} = req.body;
    const user = await UserModel.findOne({username: username});
    if(user)
    {
        const validPassword = await bcrypt.compare(password, user.password);
        if(validPassword)
        {
            res.cookie('userID', user._id);
            res.status(200).send({message: 'valide password'});
        }
        else
        {
            res.status(400).send({error: "Invalid password"});
        }
    }
    else
    {
        res.status(401).send({error: 'User does not exists'});
    }

}

export const register = async (req, res) =>
{
    console.log("here is register in controller ", req.body);
    
    const {username, password, name, dob} = req.body;
    const findUser = await UserModel.findOne({username: username});
    if(findUser)
    {
        res.status(400).send({error: "user already"});
    }
    else
    {
        let user = {};
        user.username = username;
        user.password = password;
        user.name = name;
        user.dob = dob;

        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);

        const newUser = new UserModel(user);

        await newUser.save().then((doc) => res.status(201).send(doc));

    }
    
}