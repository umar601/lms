
const express = require("express");

const router = express.Router();

const {handlertoHomepage,handlertogetdata} = require("../controllers/conroller");

const uplaod = require("../middlewares/cloudupload");


router.get("/home",handlertoHomepage);
router.post("/home",uplaod.array("images"),handlertogetdata);


module.exports = router;