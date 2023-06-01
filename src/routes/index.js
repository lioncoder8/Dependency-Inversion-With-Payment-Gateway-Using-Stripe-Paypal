import express from "express";
import payment from "./payment";

const app = express();

app.use("/payment", payment);

export default app;
