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
import userRouter from "./src/routes/user.routes.js";
import orderRouter from "./src/routes/order.routes.js";

//Routes Decleration
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/order",orderRouter)

//Global Error Middleware
app.use(errorMiddleware);
export { app };
