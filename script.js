// Données des produits
const products = [
  {
    category: 'Pain',
    name: 'Baguette Carrefour 250g',
    image: 'https://cdn.carrefour.eu/1200_01962796_5400101490079_00.jpeg',
    price: 0.89,
    supermarket: 'Carrefour-express',
    lastModified: new Date('2023-07-16'),
  },
  {
    category: 'Pain',
    name: 'Baguette Carrefour 250g',
    image: 'https://cdn.carrefour.eu/1200_01962796_5400101490079_00.jpeg',
    price: 0.89,
    supermarket: 'Deliveroo Carrefour-express',
    lastModified: new Date('2023-07-16'),
  },
];

// Fonction pour afficher les catégories
function displayCategories(categories) {
  const categoryContainer = document.getElementById('product-categories');
  categoryContainer.innerHTML = '';

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.innerHTML = `
      <img src="${category.image}" alt="${category.name}">
      <span>${category.name}</span>
    `;
    categoryElement.addEventListener('click', () => {
      const filteredProducts = category.name === 'Tout les produits' ? products : products.filter(product => product.category === category.name);
      displayProducts(filteredProducts);
    });
    categoryContainer.appendChild(categoryElement);
  });
}

// Fonction pour afficher les produits
function displayProducts(products) {
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Prix: ${product.price} €</p>
      <p>Supermarché: ${product.supermarket}</p>
      <p>Dernière modification: ${product.lastModified.toLocaleDateString('fr-FR')}</p>
    `;
    productContainer.appendChild(productElement);
  });
}

// Fonction pour afficher le nombre total de produits et le nombre de produits par supermarché
function displayProductStats() {
  const totalProductsElement = document.getElementById('total-products');
  totalProductsElement.textContent = `Nombre total de produits : ${products.length}`;

  const productsBySupermarket = {};
  products.forEach(product => {
    if (productsBySupermarket[product.supermarket]) {
      productsBySupermarket[product.supermarket]++;
    } else {
      productsBySupermarket[product.supermarket] = 1;
    }
  });

  const productsBySupermarketElement = document.getElementById('products-by-supermarket');
  productsBySupermarketElement.innerHTML = '';
  Object.entries(productsBySupermarket).forEach(([supermarket, count]) => {
    const supermarketElement = document.createElement('p');
    supermarketElement.textContent = `${supermarket}: ${count} produits`;
    productsBySupermarketElement.appendChild(supermarketElement);
  });
}

// Fonction pour trier les produits par ordre de prix
function sortProductsByPrice(products, sortOrder) {
  return products.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
}

// Fonction pour trier les produits par ordre alphabétique
function sortProductsByName(products, sortOrder) {
  return products.sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
}

// Fonction pour trier les produits par date de dernière modification
function sortProductsByLastModified(products, sortOrder) {
  return products.sort((a, b) => sortOrder === 'asc' ? a.lastModified - b.lastModified : b.lastModified - a.lastModified);
}



// Fonction pour initialiser le site
function init() {
  const categories = [
    { name: 'Fruits', image: 'https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg' },
    { name: 'Légumes', image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/L%C3%A9gumes_pour_ratatouille_au_march%C3%A9_d%27Apt.jpg' },
    { name: 'Viande', image: 'https://i.notretemps.com/1400x787/smart/2023/01/17/illustration-de-viande.jpeg' },
    { name: 'Papier toilette', image: 'https://cdn.webshopapp.com/shops/291748/files/331481689/1000x1000x2/jantex-toiletpapier-premium-40-stuk-3-laags-170-ve.jpg' },
    { name: 'Eau', image: 'https://img.passeportsante.net/1200x675/2022-10-07/shutterstock-1280610196.webp' },
    { name: 'Lasagne', image: 'https://images.radio-canada.ca/v1/alimentation/recette/4x3/lasagne-25129.jpg' },
    { name: 'Pain', image: 'https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/pain_0.jpg?itok=Iw06GBaT' },
    { name: 'Tout les produits', image: 'https://media.sudouest.fr/7083913/1000x500/gdfgdfg.jpg?v=1637768353' },
  ];

  displayCategories(categories);
  displayProductStats();

  const sortSelect = document.getElementById('sort-select');
  sortSelect.addEventListener('change', () => {
    const sortOption = sortSelect.value;
    let sortedProducts = [];

    if (sortOption === 'priceAsc' || sortOption === 'priceDesc') {
      sortedProducts = sortProductsByPrice(products, sortOption === 'priceAsc' ? 'asc' : 'desc');
    } else if (sortOption === 'nameAsc' || sortOption === 'nameDesc') {
      sortedProducts = sortProductsByName(products, sortOption === 'nameAsc' ? 'asc' : 'desc');
    } else if (sortOption === 'lastModifiedAsc' || sortOption === 'lastModifiedDesc') {
      sortedProducts = sortProductsByLastModified(products, sortOption === 'lastModifiedAsc' ? 'asc' : 'desc');
    }

    displayProducts(sortedProducts);
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
    displayProducts(filteredProducts);
  });
}

// Appel de la fonction d'initialisation
init();
