import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dandekranthikeya99:kalakeya99@cluster0.2ewj8ec.mongodb.net/fooddel').then(()=>console.log("DB connected"));
}