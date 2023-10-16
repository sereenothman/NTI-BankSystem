// const coursess=require("../model/data")
const course=require("../model/mongoose")
class courses{
    static addc=async(req,res)=>{ 
        // coursess.push({...req.body})
        // console.log(req.body);
        const newcour=new course(req.body)
        await newcour.save()
        res.status("201").json(newcour)
    }
    static updatec=async(req,res)=>{
        try {
            const idn=req.params.id
            const cour=await course.findByIdAndUpdate(idn,{$set:{...req.body}})
        // let indx=coursess.find((t)=>t.id==idn)
        // indx.title={...req.body}.title
        return res.json(cour)
        } catch (error) {
            res.status(400).json({err:error})
        }
    
    }
    static showc=async(req,res)=>{
        let coursess=await course.find()
        res.json(coursess  )
    }
    static delc=async(req,res)=>{
        // let indx=coursess.findIndex((t)=>t.id==idn)
        // coursess.splice(indx,1)
        try {
            const idn=req.params.id
            const cour=await course.deleteOne({_id:idn})
        return res.json(course)
        } catch (error) {
            res.status(400).json({err:error})
        }
    
    }
    static showsinglec=async(req,res)=>{
       try {
        const idn=req.params.id
        // let indx=coursess.find((t)=>t.id==idn)
        const cour= await course.findById(idn)
        return res.json(cour)
        if(!cour){return res.status(400).json({msg:"not found"})}
       } catch (error) {
        return res.status(400).json({msg:"invalid objid"})
       }
    }   
}
module.exports=courses