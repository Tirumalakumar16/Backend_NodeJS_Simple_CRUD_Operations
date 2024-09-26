const express = require("express");

const router = express.Router();


const userController = require("../controller/user");

//For same routes we are using route('path')
router.route('/')
.get(userController.handleGetAllUsers)
.post(userController.handlePostUser)

router
  .route("/:id")
  .get(userController.handleGetUserById)
  .put((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete(userController.handleDaleteUserById);



module.exports = router;
