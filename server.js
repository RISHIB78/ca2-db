const express=require("express")
const app=express()
const port=4000
const data=require("./data/db")
const mod=require("./models/books")
const {config}=require("dotenv")
require("dotenv").config()
app.use(express.json())
app.post("/create",async (req,res) => {
    const{title, author, genre,publishedYear,availableCopies,BorrowedBY}=req.body
    try {
        const create=await mod.create({
            title,
            author,
            genre,
           publishedYear,
          availableCopies,
          BorrowedBY
        })
        res.status(200).json(create)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
app.get("/create/:id",async (req,res) => {
    try {
        const found=mod.findById(req.params.id)
        if(!found){
            return res.status(404).json({message:"could not find book"})
        }
        res.status(200).json(found)
    } catch (error) {

   res.status(500).json({message:error.message})
        
    }
    
})
app.put("/create/:id",async (req,res) => {
    try {
        const update=mod.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        if(!update){
            return res.status(404).json({message:"could not update book"})
        }
        res.status(200).json(update)
    } catch (error) {

   res.status(500).json({message:error.message})
        
    }
    
})
app.delete("/delete/:id",async (req,res) => {
    try {
        const deleted=mod.findById(req.params.id)
        if(!deleted){
            return res.status(404).json({message:"could not delete book"})
        }
        res.status(200).json(deleted)
    } catch (error) {

   res.status(500).json({message:error.message})
        
    }
    
})
app.listen(port,()=>{
    console.log(`we are listening on port ${port}`);
    
})