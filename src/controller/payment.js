import StripeServiceWrapper from "../Service/StripeService";
import PayPalServiceWrapper from "../Service/PaypalService";
import { SUCCESS_MESSAGE } from "../utils/Payment";
import { create_payment_json, execute_payment_json } from "../Service/PayPal/mockPayment";
import PaymentStore from "../Service/PaymentStore";

/**
 * Payment End-Point Using Stripe Api
 */

const post = async (req, res) => {
  const store = new PaymentStore(new StripeServiceWrapper());
  await store.makeTransaction();
  return res.status(200).send({ charged: true, message: SUCCESS_MESSAGE });
};

/**
 * Payment End Point Using Paypal Api
 */
const successPage = async (req, res) => {
  const { PayerID, paymentId } = req.query;
  const payment_object = execute_payment_json(PayerID);
  const store = new PaymentStore(new PayPalServiceWrapper());
  await store.makeTransaction({ payment_object, paymentId });
  return res.status(200).send({ charged: true, message: SUCCESS_MESSAGE });
};

/**
 * Get Payment Redirect Link
 */
const paypalRedirectLink = async (req, res) => {
  const payPalService = new PayPalServiceWrapper();
  const payment = await payPalService.paymentExecutionLink(create_payment_json);
  const redirectLink = payPalService.getRedirectLink(payment.links);
  return res.status(200).send({ redirectLink });
};
export default {
  post,
  paypalRedirectLink,
  successPage,
};
