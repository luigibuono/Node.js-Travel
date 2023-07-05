const express = require ("express");
const router = express.Router();


router.put("/:id", verifyTokenAndAuthorization);

router.delete("/:id", verifyTokenAndAuthorization);

router.get("/find/:id", verifyTokenAndAdmin);

router.get("/", verifyTokenAndAdmin);

router.get("/stats", verifyTokenAndAdmin);
