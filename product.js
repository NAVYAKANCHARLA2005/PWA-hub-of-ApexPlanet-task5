const products = [
  { name: 'Book', category: 'Books', price: 200, rating: 4.5 },
  { name: 'Pen', category: 'Stationery', price: 30, rating: 4.0 },
  { name: 'Laptop', category: 'Electronics', price: 45000, rating: 4.8 },
  { name: 'Headphones', category: 'Electronics', price: 3000, rating: 4.2 },
  { name: 'Notebook', category: 'Stationery', price: 100, rating: 4.1 },
  { name: 'Desk Lamp', category: 'Home Decor', price: 1200, rating: 4.6 }
];

let filtered = [...products];

function displayProducts(items) {
  const list = document.getElementById('productList');
  list.innerHTML = '';

  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p><strong>Price:</strong> ₹${p.price}</p>
      <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
      <p><strong>Category:</strong> ${p.category}</p>
    `;
    list.appendChild(div);
  });
}

function sortProducts() {
  const sortBy = document.getElementById('sort').value;
  if (sortBy === 'price') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }
  displayProducts(filtered);
}

function filterProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
  displayProducts(filtered);
}

displayProducts(products);

