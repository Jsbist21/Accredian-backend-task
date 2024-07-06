import express from "express";
import { createReferral } from "../controllers/referralController.js";

const router = express.Router();

router.post("/referrals", createReferral);

export default router;
