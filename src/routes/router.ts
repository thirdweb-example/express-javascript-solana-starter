import { claimNFT } from "@/controllers";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/claim", claimNFT);

export default router;
