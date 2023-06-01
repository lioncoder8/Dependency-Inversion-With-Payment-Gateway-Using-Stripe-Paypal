import paypal from "paypal-rest-sdk";
import "./PayPal/PayPalConfig";

class PayPalServiceWrapper {
  createCharge({ payment_object, paymentId }) {
    return new Promise(function (resolve, reject) {
      paypal.payment.execute(paymentId, payment_object, function (error, payment) {
        if (error) reject(error);
        else {
          const { id, transactions } = payment;
          resolve({ id, amount: parseInt(transactions[0].amount.total) });
        }
      });
    });
  }

  paymentExecutionLink(paymentObject) {
    return new Promise(function (resolve, reject) {
      paypal.payment.create(paymentObject, function (error, payment) {
        if (error) reject(error);
        else resolve(payment);
      });
    });
  }

  getRedirectLink(links) {
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === "approval_url") return links[i].href;
    }
  }
}

export default PayPalServiceWrapper;
