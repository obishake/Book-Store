import express, { response } from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";



dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5555;
const mongo_url = process.env.MONGO_DB_URI;

app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:3000/',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("backend is running...");
});

app.use("/books", booksRoute);

mongoose
    .connect(mongo_url)
    .then(() => {
        console.log("App connected to database");
        app.listen(port, () => {
            console.log(`App is listening to port: ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
