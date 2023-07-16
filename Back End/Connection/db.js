const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB}`)
.then(()=>console.log("connected"))
.catch((e)=>console.log("Error"+e));