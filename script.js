// script.js

// Shoe product list (with images)
const products = [
  {
    id: 1,
    name: "Champ Classic Runner",
    price: 60,
    image: "https://images.unsplash.com/photo-1698611028521-4c284ca88b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMHJ1bm5lciUyMHNob2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "Urban Street Sneakers",
    price: 75,
    image: "https://images.unsplash.com/photo-1697986961090-367c706de666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFVyYmFuJTIwU3RyZWV0JTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Champ Trail Boots",
    price: 95,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Champ White Walkers",
    price: 50,
    image: "https://images.unsplash.com/photo-1604400389379-bd02bdc0f022?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2hpdGUlMjBXYWxrZXJzJTIwYm9vdHxlbnwwfHwwfHx8MA%3D%3D"
  }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

// Render products
function renderProducts() {
  if (!productList) return;
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart!");
}

// Update cart item count
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartCount) cartCount.textContent = cart.length;
}

// Show logout if logged in
function checkLoginStatus() {
  const user = localStorage.getItem("user");
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");

  if (user && logoutLink && loginLink) {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
    logoutLink.onclick = () => {
      localStorage.removeItem("user");
      window.location.reload();
    };
  }
}

// Init
renderProducts();
updateCartCount();
checkLoginStatus();
