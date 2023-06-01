// These Data Comes From Front-End BTW
// PRICE: 200$
export const create_payment_json = {
  intent: "sale",
  payer: {
    payment_method: "paypal",
  },
  redirect_urls: {
    return_url: "http://localhost:3000/payment/sucess",
    cancel_url: "http://localhost:3000/cancel",
  },
  transactions: [
    {
      item_list: {
        items: [
          {
            name: "Hello This Demo Paypal Service",
            sku: "001",
            price: "200",
            currency: "USD",
            quantity: 1,
          },
        ],
      },
      amount: {
        currency: "USD",
        total: "200.00",
      },
      description: "Hello This Demo Paypal Service Description",
    },
  ],
};

// Payment Object After The User Finished Payment and Got The Redirect Link
export const execute_payment_json = (payer_id) => {
  return {
    payer_id,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "200.00",
        },
      },
    ],
  };
};
