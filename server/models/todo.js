import mongoose from 'mongoose';

const todoSchema= mongoose.Schema({
    text:{
        type:String,
        required:true,
        trim:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})


export const Todo = mongoose.model('todo',todoSchema);