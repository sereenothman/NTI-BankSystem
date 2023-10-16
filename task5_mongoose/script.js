const express=require("express")
const app=express()
app.use(express.json())
// app.use(express.urlencoded({ extended :true }))
const router=require("./routes/courses.routes")
const mongoose=require("mongoose")
const url="mongodb://127.0.0.1:27017"
mongoose.connect(url).then(()=>{
    console.log("connected suceesflly");
})
app.use("/",router)

app.listen(3000,()=>{
    console.log("localhost:3000");
})