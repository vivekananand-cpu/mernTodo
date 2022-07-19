import express from 'express';
import cors from 'cors';
import {connection} from './db/conn.js';
import {router} from './router/routers.js'


const PORT= 8001;
const app=express();
connection();

app.use(express.json());
app.use(cors());
app.use(router);




app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`);
})

