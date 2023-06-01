import db from "../models";

class PaymentService {
  async addNewCharge(payment) {
    const { amount, id: chargeId } = payment;
    await db.payment.create({ amount, chargeId });
  }
}

export default PaymentService;
