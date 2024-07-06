import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
import {cart} from "../../data/cart.js";

describe('test suite: renderOrderSummary', () => {
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML = `
    <div id="js-checkout-header"></div>
    <div id="js-order-summary"></div>
    <div id="js-payment-summary"></div>
    `;

    cart.cartItems = [{
      productId: productId1,
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: productId2,
      quantity: 1,
      deliveryOptionId: '2'
    }];

    renderOrderSummary();
  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  });

 it('displays the cart', () => {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    expect(
      document.getElementById(`js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');
    expect(
      document.getElementById(`js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');
    expect(
      document.getElementById(`js-product-name-${productId1}`).innerText
    ).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(
      document.getElementById(`js-product-name-${productId2}`).innerText
    ).toEqual('Intermediate Size Basketball');
    expect(
      document.getElementById(`js-product-price-${productId1}`).innerText
    ).toEqual('$10.90');
    expect(
      document.getElementById(`js-product-price-${productId2}`).innerText
    ).toEqual('$20.95');
  })

  it('removes a product', () => {
    document.getElementById(`js-delete-link-${productId1}`).click();

    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.getElementById(`js-cart-item-container-${productId1}`)
    ).toEqual(null);
    expect(
      document.getElementById(`js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
    expect(
      document.getElementById(`js-product-name-${productId2}`).innerText
    ).toEqual('Intermediate Size Basketball');
    expect(
      document.getElementById(`js-product-price-${productId2}`).innerText
    ).toEqual('$20.95');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual(productId2);
  })
});