const router = require("express").Router()

const taskController = require("../controller/users.controller")

router.get("/", taskController.showAll)

router.get("/adduser", taskController.adduser)
router.get("/addLogic", taskController.addLogic)

// router.get("/addadress", taskController.addadress)

// router.post("/addadressLogic", taskController.addadressLogic)





module.exports = router
