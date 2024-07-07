import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {cart} from '../data/cart.js';

async function loadPage() {
  await loadProductsFetch();

  await new Promise((resolve) => {
    cart.loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
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