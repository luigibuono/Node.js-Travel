const express = require ("express");
const router = express.Router();


router.get("/find/:OrderByDate",verifyTokenAndAuthorization);

router.post("/",verifyToken);

router.put("/:id",verifyTokenAndAdmin);

router.delete("/:id",verifyTokenAndAdmin);

router.get("find/:userId",verifyTokenAndAuthorization);

router.get("/",verifyTokenAndAdmin);


module.exports = router;