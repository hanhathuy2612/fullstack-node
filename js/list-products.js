import {ProductApi} from "./api/product.api.js";

const productApi = new ProductApi();
productApi.getAll().then();

document.addEventListener('DOMContentLoaded', function () {
  let cart = [];

  function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
  }

  function addToCart(productName, quantity) {
    for (let i = 0; i < quantity; i++) {
      cart.push(productName);
    }
    updateCartCount();
  }

  function openLiveChat() {
    const userMessage = prompt('Cảm ơn bạn đã lựa chọn sản phẩm của chúng tôi. Bạn cần chúng tôi hỗ trợ gì ạ?');
    if (userMessage) {
      alert('Chúng tôi đã nhận được yêu cầu của bạn. Cảm ơn bạn!');
      // Ở đây, bạn có thể thực hiện thêm xử lý hoặc gửi yêu cầu đến một hệ thống live chat thực tế.
    }
  }

  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.dataset.productName;
      const quantityInput = this.parentElement.querySelector('.quantity-input');
      const quantity = parseInt(quantityInput.value, 10);
      addToCart(productName, quantity);
    });
  });

  const liveChatButton = document.querySelector('.live-chat-button');
  liveChatButton.addEventListener('click', openLiveChat);

  const quantityButtons = document.querySelectorAll('.quantity-button');
  quantityButtons.forEach(button => {
    button.addEventListener('click', function () {
      const quantityInput = this.parentElement.querySelector('.quantity-input');
      let quantity = parseInt(quantityInput.value, 10);
      if (this.classList.contains('increase')) {
        quantity++;
      } else if (this.classList.contains('decrease') && quantity > 1) {
        quantity--;
      }
      quantityInput.value = quantity;
    });
  });
});
