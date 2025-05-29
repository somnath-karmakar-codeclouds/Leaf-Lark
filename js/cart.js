 // Cart call Products


document.addEventListener('DOMContentLoaded', function () {
      renderCart();
      updateCartBadge();
    });

    function renderCart() {
  const cartContainer = document.getElementById('cart-container');
  const subtotalEl = document.getElementById('subtotal');
  const subtotalElt = document.getElementById('subtotal2');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cartContainer.innerHTML = '';
  let subtotal = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Looks like you haven’t added anything to your cart yet.</p>
        <a href="/">
          <button class="btn">Continue Shopping</button>
        </a>
      </div>
    `;
    subtotalEl.textContent = "$0.00";
    subtotalElt.textContent = "$0.00";
    return;
  }

  cart.forEach((item, index) => {
    const price = parseFloat(item.price) || 0;
    const itemTotal = price * item.quantity;
    subtotal += itemTotal;

    const itemDiv = document.createElement('tr');
    itemDiv.className = 'cart-item';

    itemDiv.innerHTML = `
    <td>
    <a class="remove-btn" onclick="removeItem(${index})">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    </a>
    </td>
    <td>
        <img src="${item.image}" alt="${item.name}">
      </td>
        <td>
          <strong>${item.name}</strong>
        </td>
   <td>
        $${price.toFixed(2)}
    </td>
    <td>
      <div class="quantity-control">
        <button onclick="updateQuantity(${index}, -1)">−</button>
        <input type="number" value="${item.quantity}" readonly>
        <button onclick="updateQuantity(${index}, 1)">+</button>
      </div>
      </td>

      <td>$${itemTotal.toFixed(2)}</td>

    `;

    cartContainer.appendChild(itemDiv);
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  subtotalElt.textContent = `$${subtotal.toFixed(2)}`;

}

    function updateQuantity(index, change) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart[index].quantity += change;

      if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartBadge();
    }

    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartBadge();
    }

    function updateCartBadge() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
      const cartBag = document.getElementById('cartbag');

      if (cartBag) {
        cartBag.setAttribute('data-badge', totalQuantity);
      }
    }


    