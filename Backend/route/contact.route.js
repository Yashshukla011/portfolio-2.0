import express from "express";

import {
    sendContact
} from "../controller/contact.js";


const router = express.Router();


router.post(
    "/send",
    sendContact
);


export default router;