// Données des produits
const products = [
  {
    category: 'Fruits',
    name: 'Pommes Jazz',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/1055/1/0/_jcr_content/assets/imported-images/BILD_INTERNET23/1055-jazzappels_2310_sfr.jpg/_jcr_content/renditions/original.transform/1250w/img.1681688174803.jpg',
    price: 1.99,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-15'),
  },
  {
    category: 'Fruits',
    name: 'Pommes Pink Lady',
    image: 'https://cap.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fcap.2F2022.2F03.2F28.2F5b4cb59d-49f6-40d8-8b0c-7c31192aa104.2Ejpeg/1200x630/background-color/ffffff/quality/70/la-pomme-pink-lady-un-veritable-phenomene-mondial-1434024.jpg',
    price: 2.49,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-14'),
  },
  {
    category: 'Légumes',
    name: 'Carottes bio Carrefour',
    image: 'https://cdn.carrefour.eu/1200_01527352_5400101204508_00.jpeg',
    price: 0.99,
    supermarket: 'Carrefour-express',
    lastModified: new Date('2023-07-13'),
  },
  {
    category: 'Légumes',
    name: 'Tomates en grappe',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/6240/1/0/_jcr_content/assets/imported-images/BILD_INTERNET15/6240_trostomaten_per_kg.png/_jcr_content/renditions/opt.1250w.png.res/1658714363695/opt.1250w.png',
    price: 1.49,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-12'),
  },
  {
    category: 'Légumes',
    name: 'Tomates bio en grappe Carrefour',
    image: 'https://cdn.carrefour.eu/1200_05710238_2739061000000_00.jpeg',
    price: 10.49,
    supermarket: 'Carrefour-express',
    lastModified: new Date('2023-07-12'),
  },
  {
    category: 'Viande',
    name: '4 Steak de boeuf',
    image: 'https://fr.openfoodfacts.org/images/products/20293369/front_fr.30.full.jpg',
    price: 4.99,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-11'),
  },
  {
    category: 'Viande',
    name: 'Poulet rôti',
    image: 'https://fr.openfoodfacts.org/images/products/327/655/219/0163/front_fr.21.full.jpg',
    price: 5.95,
    supermarket: 'Carrefour-express',
    lastModified: new Date('2023-07-10'),
  },
  {
    category: 'Papier toilette',
    name: 'Papier toilette',
    image: 'https://cdn.webshopapp.com/shops/291748/files/331481689/1000x1000x2/jantex-toiletpapier-premium-40-stuk-3-laags-170-ve.jpg',
    price: 2.99,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-09'),
  },
  {
    category: 'Papier toilette',
    name: 'Papier toilette',
    image: 'https://imgproxy-retcat.assets.schwarz/ZfNTfx4DrRp7l-kIyqr5Ev7wN3N8J9izJlFN5YZXfpM/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvYmUvMS8zOTkwRjAzQkYyODE5MjZDMTA0Q0E2NEI/3Q0Y3ODBBQTUwRDYwQUI2RjU0RjVGOUJEQ0NGODJBRDgyOTZDNzlCLmpwZw.jpg',
    price: 3.49,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-08'),
  },
  {
    category: 'Eau',
    name: 'Eau de source Carrefour Pierval',
    image: 'https://cdn.carrefour.eu/1200_01421117_5400101161597_00.jpeg',
    price: 0.99,
    supermarket: 'Carrefour-express',
    lastModified: new Date('2023-07-07'),
  },
  {
    category: 'Eau',
    name: 'Eau minérale Rocheval',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/3001964/1/0/_jcr_content/assets/imported-images/BILD_INTERNET14/3001964_natuurlijk_mineraalwater-1.png/_jcr_content/renditions/opt.1250w.png.res/1681861448919/opt.1250w.png',
    price: 1.29,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-06'),
  },
  {
    category: 'Lasagne',
    name: 'Lasagne',
    image: 'https://imgproxy-retcat.assets.schwarz/u7YuP6b8Z8ka2j_CUTUbxmQx_4iVy38h8LadBmdH3EU/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvYmUvMS85NzRBNzY0OUE2RUJGRjlFOURDNkZBRDk/xMDFFRUQyNkQ1RDU5QUI3QkRBQjY2QjJFOTZFNzYwNDdCOEQ2N0E4LmpwZw.jpg',
    price: 3.99,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-05'),
  },
  {
    category: 'Lasagne',
    name: 'Lasagne Carrefour',
    image: 'https://cdn.carrefour.eu/300_04871440_5400101008267_01.jpeg',
    price: 4.49,
    supermarket: 'Carrefour-express',
    lastModified: new Date('2023-07-04'),
  },
  {
    category: 'Lasagne',
    name: 'Lasagne',
    image: 'https://fr.openfoodfacts.org/images/products/405/648/913/8082/front_fr.17.full.jpg',
    price: 4.49,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-04'),
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
    { name: 'Fruits', image: 'https://images.frandroid.com/wp-content/uploads/2023/07/mercedes-eqc-2-1200x797.jpg' },
    { name: 'Légumes', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2019_SSC_Tuatara_at_Pebble_Beach_Press_Conference.jpg/640px-2019_SSC_Tuatara_at_Pebble_Beach_Press_Conference.jpg' },
    { name: 'Viande', image: 'https://cdn-s-www.ledauphine.com/images/ED82BE29-CBAC-40EC-B71C-285CD717A43C/NW_raw/la-voiture-noire-de-bugatti-modele-unique-photo-dr-1608828241.jpg' },
    { name: 'Papier toilette', image: 'https://cdn.webshopapp.com/shops/291748/files/331481689/1000x1000x2/jantex-toiletpapier-premium-40-stuk-3-laags-170-ve.jpg' },
    { name: 'Eau', image: 'https://www.motorlegend.com/home/img/web/1689261367-mobile.jpg' },
    { name: 'Lasagne', image: 'https://journalduluxe.fr/files/mercedes-haute-voiture_70b6b237f932ea3aaddcc781e6bd1c0a.jpeg' },
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
