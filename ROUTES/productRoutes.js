const express = require ("express");
const router = express.Router();


router.post("/", verifyTokenAndAdmin);

router.put("/:id", verifyTokenAndAdmin);

router.delete("/:id", verifyTokenAndAdmin);

router.get("/find/:id");

router.get("/");

module.exports = router;