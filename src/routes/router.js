import express from "express";
import generateSignature from "../controllers/generate.js";

const router = express.Router();

router.post("/generate", generateSignature);

export default router;
