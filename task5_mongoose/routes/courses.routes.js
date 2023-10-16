const courses=require("../controller/courses.controller")
const router = require("express").Router()

router.get("/courses",courses.showc)
router.get("/courses/:id", courses.showsinglec)

router.post("/courses",courses.addc)
router.patch("/courses/:id",courses.updatec)

router.delete("/courses/:id",courses.delc)

module.exports=router