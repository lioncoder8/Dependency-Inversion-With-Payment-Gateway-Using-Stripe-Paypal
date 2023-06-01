import PaymentService from "./PaymentService";
class PaymentStore {
  constructor(paymentWrapper) {
    this.paymentWrapper = paymentWrapper;
    this.paymentService = new PaymentService();
  }

  async makeTransaction(chargeData) {
    const charge = await this.paymentWrapper.createCharge(chargeData);
    await this.paymentService.addNewCharge(charge);
    return charge;
  }
}

export default PaymentStore;
