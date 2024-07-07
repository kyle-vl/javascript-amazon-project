import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {cart} from '../data/cart.js';

async function loadPage() {
  try {
    await loadProductsFetch();

    await new Promise((resolve, reject) => {
      // throw('throw sync erorr');
      cart.loadCart(() => {
        // reject('throw async error');
        resolve();
      });
    });
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

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