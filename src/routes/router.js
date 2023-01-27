const express = require("express");
const claimNFT = require("../controllers/claim");

const router = express.Router();

router.post("/claim", claimNFT);

module.exports = router;
