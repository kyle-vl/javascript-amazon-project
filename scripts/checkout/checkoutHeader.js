import {calculateCartQuantity} from "../../data/cart.js";

export function updateCartQuantity() {
  document.getElementById('js-return-to-home-link')
    .textContent = `${calculateCartQuantity()} items`;
}