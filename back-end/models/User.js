import mongoose from 'mongoose';

const user = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        dob:{
            type: Date
        }
    },
    {timestamps: true}
);

export const UserModel = mongoose.model("User", user);