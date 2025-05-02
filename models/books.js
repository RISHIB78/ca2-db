const mongoose=require("mongoose")
const mongooseSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true,
        Genre:true
    },
    publishedYear:{
        type:Number,
        required:true
    },
    availableCopies:{
        type:Number,
        required:true
    },
    BorrowedBY:{
        type:{String},
        required:true
    },
})
module.exports=mongoose.model("books",mongooseSchema)