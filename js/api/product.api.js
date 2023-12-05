export class ProductApi {
  getAll() {
    return fetch("http://localhost:3001/api/products", {
      headers: {
        Authorization: "Bearer "
      }
    })
      .then(res => res.json())
      .then(
        products => {
          const hotProducts = document.getElementById("hot-products");
          products.forEach(product => {
            hotProducts.innerHTML += `
            <div class="product">
                <img src="${product.imageUrl}" alt="" />
                <span>${product.name}</span>
                <div class="quantity-container">
                    <button class="quantity-button decrease">-</button>
                    <input type="text" class="quantity-input" value="1">
                    <button class="quantity-button increase">+</button>
                </div>
                <button class="add-to-cart-button" data-product-name="Áo Thun A">Thêm vào giỏ hàng</button>
            </div>
            `;
          });
        }
      );
  }
}
