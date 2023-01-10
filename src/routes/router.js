import express from "express";
import claimNFT from "../controllers/claim.js";

const router = express.Router();

router.post("/claim", claimNFT);

export default router;
