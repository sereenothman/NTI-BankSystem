const deal = require("../helper/dealWithJson.helper")

class users{
    static showAll=(req,res)=>{
        const allUsers = deal.readFromJson()
        res.render("all", {
            pageTitle: "All Users",
            users : allUsers


        })
    }
    static adduser=(req,res)=>{
        // const allUsers = deal.readFromJson()
        res.render("adduser", {
            pageTitle: "All Users",
            // users : allUsers
        })
    }
    static addLogic = (req,res)=>{
        const taskData = { ...req.query}
        const allTasks = deal.readFromJson()
        allTasks.push(taskData)  //concat
        deal.writeToJson(allTasks)
        res.redirect("/")
    }

    // static addadress=(req,res)=>{
    //     res.render("addadress", {
    //         pageTitle: "Add Adress"
    //     })
    // }
    // static addadressLogic=(req,res)=>{
    //     const taskData = { ...req.body}
    //     const allTasks = deal.readFromJson()
    //     allTasks.push(taskData)  //concat
    //     deal.writeToJson(allTasks)
    //     res.redirect("/")
    // }
}
module.exports = users