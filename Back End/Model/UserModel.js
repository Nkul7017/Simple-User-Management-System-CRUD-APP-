const mongoose=require('mongoose');
const validator=require('validator');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("email is not valid");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        match:/^\d{10}$/
    }
})
module.exports=mongoose.model("User",UserSchema);