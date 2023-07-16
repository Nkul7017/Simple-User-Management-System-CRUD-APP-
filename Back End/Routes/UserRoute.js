const express=require('express');
const router=new express.Router();
const user=require('../Model/UserModel')
router.get('/users',async(req,res)=>{
    try{
    let res1=await user.find();
    res.status(200).json(res1);
    }
    catch(e){
        res.status(500).json({error:"internl server error"});
    }
})
router.post('/users',async(req,res)=>{
    try{
        
        let obj=new user(req.body);
        let res1=await obj.save();
        res.status(201).send(res1);
        }
        catch(e){
            res.status(500).json({error:"internl server error"});
        }
})
router.get('/users/:user_id',async(req,res)=>{
    try{
        let _id=req.params._user_id;
        let res1=await user.findById(_id);
        res.status(200).json(res1);
        }
        catch(e){
            res.status(500).json({error:"internl server error"});
        }
})
router.put('/users/:_user_id',async(req,res)=>{
    try{
        let _id=req.params._user_id;
        console.group(_id);
        let res1=await user.findByIdAndUpdate(_id,{
            $set:req.body
        },{new:true})
        console.log(res1);
        res.status(200).json(res1);
        }
        catch(e){
            res.status(500).json({error:"internl server error"});
        }
})
router.delete('/users/:_user_id',async(req,res)=>{
    try{
        console.log(req.params._user_id);
        let _id=req.params._user_id;
        let res1=await user.findByIdAndDelete(_id)
        res.status(200).json(res1);
        }
        catch(e){
            res.status(500).json({error:"internl server error"});
        }
})
module.exports=router;