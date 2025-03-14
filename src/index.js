

import dotenv from "dotenv";
import express from "express";

// import userRouter from "./routes/userRoutes.js";

import connectDB from "./db/index.js";

dotenv.config({
    path : './.env'
})
const app = express();
// app.use(express.json());
app.use(express.json());





connectDB()
.then( () => {
    app.listen(process.env.PORT  ||  8000 , () => {
        console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB CONNECTion  FAILED H !!! " , err);
})














