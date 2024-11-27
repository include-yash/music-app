import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDb from "./src/utils/db.js";
import UserRouter from "./src/routes/user.routes.js";

dotenv.config({});

const server = express(); 

server.use(cors());

// server.use(
//   cors({
//     origin: 'http://localhost:5173',  // Your frontend's origin
//     credentials: true,                // Allow credentials (cookies, etc.)
//   })
// );

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.get("/", (req, res) => {
  res.send("Hello");
});

server.use("/api/v1/user", UserRouter);

// 404 handler
server.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
    success: false,
  });
});

// Error handler
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
    success: false,
  });
});

const PORT = process.env.PORT;
server.listen(PORT || 1000, async () => {
  await connectDb();
  console.log("Server is listening at " + PORT);
});
