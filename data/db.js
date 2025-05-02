require("dotenv").config()
const mongo=require("mongoose")
const connected=async()=>{
    try {
        await mongo.connect(process.env.DB_URL)
        console.log("Connected");
        
    } catch  {
        console.log("Can't connect");
        
        
    }
}
module.exports=connected