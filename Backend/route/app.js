import express from "express";
import { getLeetcode } from "../controller/Leetcode.js";

const router = express.Router();

router.get("/activity", getLeetcode);

export default router;