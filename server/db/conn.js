
import mongoose from "mongoose";

const db ="mongodb+srv://vivek:vivek123@cluster0.cb704.mongodb.net/todos?retryWrites=true&w=majority"

export const connection =async()=>{
    try{

        await mongoose.connect(db);
        console.log('connection successful')

    }catch(err){
        console.log(err);
    }
}