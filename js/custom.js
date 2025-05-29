// Feather Icon
feather.replace();


// Smooth Appear
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appeard');
      observer.unobserve(entry.target); 
    }
  });
});

document.querySelectorAll('.appear').forEach(el => observer.observe(el));

// Header Fixed

window.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const headerHeight = header.offsetHeight;
  document.body.style.paddingTop = `${headerHeight}px`;
});

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('DOMContentLoaded', () => {
  const headerHeight = header.offsetHeight;
  document.body.style.paddingTop = `${headerHeight}px`;
  header.classList.add('visible-header');
});

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 200) {
    if (currentScrollY > lastScrollY) {
      header.classList.remove('visible-header');
    } else {
      header.classList.add('visible-header');
    }
  } else {
    header.classList.add('visible-header');
  }

  lastScrollY = currentScrollY;
});



// Mega Menu Dropdown Code
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const shopMenu = document.getElementById('shop-menu');
const productPreview = document.getElementById('product-preview');

const products = {
  thor: [
    { name: 'Thor Pot A', price: '$19.99', img: 'images/plant-1.jpg' },
    { name: 'Thor Pot B', price: '$24.99', img: 'images/plant-2.jpg' },
    { name: 'Thor Pot A', price: '$19.99', img: 'images/plant-1.jpg' },
  ],
  indoor: [
    { name: 'Indoor Fern', price: '$14.99', img: 'images/plant-3.jpg' },
    { name: 'Peace Lily', price: '$17.99', img: 'images/plant-4.jpg' },
    { name: 'Indoor Fern', price: '$14.99', img: 'images/plant-3.jpg' }
  ],
  fancy: [
    { name: 'Fancy Fern', price: '$19.99', img: 'images/plant-5.jpg' },
    { name: 'Fancy Lily', price: '$24.99', img: 'images/plant-6.jpg' },
    { name: 'Fancy Fern', price: '$19.99', img: 'images/plant-5.jpg' }
  ],
  child: [
    { name: 'Child Fern', price: '$14.99', img: 'images/plant-7.jpg' },
    { name: 'Child Lily', price: '$17.99', img: 'images/plant-8.jpg' },
    { name: 'Child Fern', price: '$14.99', img: 'images/plant-7.jpg' }
  ]
};

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

shopMenu.addEventListener('click', (e) => {
  if (window.innerWidth < 769) {
    e.preventDefault();
    shopMenu.classList.toggle('open');
  }
});

// On Hover Load
const collectionLinks = shopMenu.querySelectorAll('[data-collection]');
collectionLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const key = link.dataset.collection;
    const items = products[key] || [];

    productPreview.innerHTML = items.map(item => `
      <div class="product-card">
        <img src="${item.img}" alt="${item.name}" />
        <div class="product-info">
          <h5><a href="#">${item.name}</a></h5>
          <p>${item.price}</p>
        </div>
      </div>
    `).join('');
  });
});

// Initial load
const initial = products['thor'];
productPreview.innerHTML = initial.map(item => `
  <div class="product-card">
    <img src="${item.img}" alt="${item.name}" />
    <div class="product-info">
      <h5><a href="#">${item.name}</a></h5>
      <p>${item.price}</p>
    </div>
  </div>
`).join('');


// Owl Carousal Main Banner

$('.owl-carousel.main-banner').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  autoplayTimeout: 3000,
  items:1,
  autoplay: true,
  // animateOut: 'fadeOut',
  // animateIn: 'fadeIn',
})


// Tab Design

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});


// Owl Carousal Product Carousal

$('.owl-carousel.product-box-wraper').owlCarousel({
  loop:true,
    margin:25,
    responsiveClass:true,
    dots:false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
          items:2,
          nav:true
        },
        769:{
            items:3,
            nav:true
        },
        1180:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

// Customer Review Carousal

$('.owl-carousel.customer-review').owlCarousel({
  loop:true,
  autoplay: true,
  margin:25,
  responsiveClass:true,
  dots:false,
  autoplayTimeout: 5000,
  nav: true,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'],
  responsive:{
    0:{
        items:1,
        nav:true
    },
    769:{
        items:2,
        nav:true
    }
}
})



// Owl Carousal Product Carousal

$('.owl-carousel.logo-carousal').owlCarousel({
  loop:true,
  autoplay: true,
    margin:25,
    responsiveClass:true,
    dots:false,
    autoplayTimeout: 3000,
    nav:false,
    loop:true,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'],
    responsive:{
        0:{
            items:3,
        },
        480:{
          items:4,
        },
        769:{
            items:5,
        },
        1180:{
            items:6,
        }
    }
})


// Newsletter Form Validation

const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const messageDiv = document.getElementById('message');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.className = 'error';
    return;
  }

  messageDiv.textContent = 'Thank you for subscribing!';
  messageDiv.className = 'success';
  form.reset();
});



// Add To Cart Function And Store On LocalStorage

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const productDiv = this.closest('.product-box');

      const quantityInput = productDiv.querySelector('#custom-number');
      const quantity = quantityInput ? parseInt(quantityInput.value, 10) || 1 : 1;

      const priceRaw = productDiv.dataset.price || "";
      const priceClean = parseFloat(priceRaw.replace(/[^0-9.]/g, ''));

      const product = {
        id: productDiv.dataset.id,
        type: productDiv.dataset.type,
        name: productDiv.dataset.name,
        price: priceClean,
        image: productDiv.dataset.image,
        quantity: quantity
      };

      addToCart(product);
    });
  });
});

function changeValue(amount) {
  const input = document.getElementById('custom-number');
  const current = parseInt(input.value, 10) || 1;
  const min = parseInt(input.min, 10) || 1;
  const max = parseInt(input.max, 10) || 999;
  let newValue = current + amount;
  if (newValue < min) newValue = min;
  if (newValue > max) newValue = max;
  input.value = newValue;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
  showSnackbar(`${product.name} added to cart`);
}

function updateCartBadge() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById('cartbag').setAttribute('data-badge', count);
}

function showSnackbar(message = "Product added to cart") {
  const snackbar = document.getElementById("snackbar");
  snackbar.textContent = message;
  snackbar.classList.add("show");

  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}




// Preview Modal

document.querySelectorAll('.preview').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const productDiv = this.closest('.product-box');
    const name = productDiv.dataset.name;
    const price = productDiv.dataset.price;
    const type = productDiv.dataset.type;
    const image = productDiv.dataset.image;
    const modal = document.getElementById('previewModal');
    const modalContent = modal.querySelector('.modal-content');

    document.getElementById('modalType').textContent = type;
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalImage').src = image;

    modalContent.dataset.name = name;
    modalContent.dataset.type = type;
    modalContent.dataset.price = price;
    modalContent.dataset.image = image;

    document.getElementById('previewModal').style.display = 'flex';
  });
});

document.querySelector('#previewModal .close').addEventListener('click', () => {
  document.getElementById('previewModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('previewModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


//   Filter Product Js

const filters = {
  color: [],
  size: [],
  type: []
};

document.querySelectorAll('.filter-box a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const type = this.dataset.filterType;
    const value = this.dataset.value;
    const groupLinks = this.closest('ul').querySelectorAll('a');

    if (value === 'all') {
      filters[type] = [];
      groupLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    } else {
      groupLinks.forEach(l => {
        if (l.dataset.value === 'all') l.classList.remove('active');
      });

      const index = filters[type].indexOf(value);
      if (index > -1) {
        filters[type].splice(index, 1);
        this.classList.remove('active');
      } else {
        filters[type].push(value);
        this.classList.add('active');
      }
      const anySelected = filters[type].length > 0;
      if (!anySelected) {
        groupLinks.forEach(l => {
          if (l.dataset.value === 'all') l.classList.add('active');
        });
      }
    }
    applyFilters();
  });
});

function applyFilters() {
  const products = document.querySelectorAll('.product-box');
  let anyVisible = false;

  products.forEach(product => {
    const matchColor = filters.color.length === 0 || filters.color.includes(product.dataset.color);
    const matchSize = filters.size.length === 0 || filters.size.includes(product.dataset.size);
    const matchType = filters.type.length === 0 || filters.type.includes(product.dataset.type);

    if (matchColor && matchSize && matchType) {
      product.style.display = '';
      anyVisible = true;
    } else {
      product.style.display = 'none';
    }
  });

  const noProductsMessage = document.getElementById('no-products-message');
  noProductsMessage.style.display = anyVisible ? 'none' : 'block';
}



// Tabs System

const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

// Review Form

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('product-details-page')) {
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.getElementById('reviews-container');

    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const reviewText = document.getElementById('review').value.trim();

      if (name && reviewText) {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.innerHTML = `<h5><strong>${name}</strong></h5><p>${reviewText}</p>`;
        reviewsContainer.prepend(reviewDiv);

        reviewForm.reset();
      }
    });
  }
});


 