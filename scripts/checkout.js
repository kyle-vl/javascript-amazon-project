import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js';
import {cart} from '../data/cart.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }),

  new Promise((resolve) => {
    cart.loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

/*
loadProducts(() => {
  cart.loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/