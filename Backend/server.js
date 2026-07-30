import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import leetcodeRoute from "./route/app.js";
import contactRouter from "./route/contact.route.js";
import ConnectDB from "./connect/db.js";

dotenv.config();


const app = express();


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


app.use(express.json());

ConnectDB();

// routes
app.use("/api/leetcode", leetcodeRoute);


app.use(
    "/api/contact",
    contactRouter
);


app.get("/",(req,res)=>{
    res.send("LeetCode API Server Running");
});



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(`Server running on port ${PORT}`);

});

