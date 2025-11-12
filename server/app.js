import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./src/middlewares/error.middleware.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.json());
app.use(cookieParser());

//Routes Import
import productRouter from "./src/routes/product.routes.js";

//Routes Decleration
app.use("/api/product", productRouter);


//Global Error Middleware
app.use(errorMiddleware);
export { app };
