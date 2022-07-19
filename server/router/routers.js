
import express from 'express';
import { Todo } from '../models/todo.js';

export const router = express.Router();

router.get('/todos',async(req,res)=>{
    try{

        const todos = await Todo.find();
        res.send(todos);

    }catch(err){
        res.status(404).send(err);
    }
});

router.post('/todo/new',async(req,res)=>{
    try{

        const todo = await Todo.create(req.body);
        res.status(201).send(todo);

    }catch(err){
        res.status(500).send(err);
    }
})


router.get('/todo/complete/:id',async(req,res)=>{
    try{

        const todo = await Todo.findById({_id:req.params.id});
        todo.complete = !todo.complete;

         todo.save();

        res.send(todo);

    }catch(err){
        res.status(500).send(err);
    }
})


router.delete('/todo/delete/:id',async(req,res)=>{
     
    try{
        const data = await Todo.deleteOne({_id:req.params.id});

       

        res.send(data);

    }catch(err){
        res.status(500).send(err);
    }
});


router.get('/test',(req,res)=>{
    try{

        res.send(true);

    }catch(err){
        res.send(false);
    }
})