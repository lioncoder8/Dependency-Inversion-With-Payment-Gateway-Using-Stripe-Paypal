import express from "express";
import payment from "../controller/payment";
const paymentRouter = express.Router();

paymentRouter.post("/", payment.post);
paymentRouter.post("/paypal", payment.paypalRedirectLink);
paymentRouter.get("/sucess", payment.successPage);

export default paymentRouter;
