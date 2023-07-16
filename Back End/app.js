require('dotenv').config();
require('./Connection/db')
const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors());
const UserRouter=require('./Routes/UserRoute')
app.use(express.json());
const port=process.env.PORT
app.use(UserRouter);
app.listen(port,()=>{
    console.log("listening");
})
