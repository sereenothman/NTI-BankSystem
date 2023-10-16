const mongoose= require("mongoose")

const courseschema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    }
})

module.exports=mongoose.model("Course", courseschema)