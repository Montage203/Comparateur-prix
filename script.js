// Données des produits
const products = [
{
    category: 'Choco',
    name: 'Nussa 750g tartine',
    image: 'https://imgproxy-retcat.assets.schwarz/P3XJC4cUGaP4GHd9L6PidzzcVTxVcyRo-_rBwce9zVs/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvYmUvMS80RUYzMDRDNTAxQzJBNzI0NzVEMUY0OUM/zQzY2MTk1OEQwMTU3ODBBMDU4MDZFRUZBOTNEMjkyNTFFOTJENkRELmpwZw.jpg',
    price: 2.19,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-22'),
  },
 {
    category: 'Choco',
    name: 'Delinut 750g tartine',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/2907/1/0/_jcr_content/assets/imported-images/BILD_INTERNET11/2907_hazelnootpasta_1.png/_jcr_content/renditions/opt.1250w.png.res/1680046698759/opt.1250w.png',
    price: 2.55,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-22'),
  },
  {
    category: 'Entretien',
    name: 'Lessive Carrefour 18 Tabs',
    image: 'https://media.carrefour.fr/medias/26be6b55f61c36b8ae5b35fd07cc41ec/p_1500x1500/3560071242404-0.jpg',
    price: 5.59,
    supermarket: 'Deliveroo Carrefour-express',
    lastModified: new Date('2023-07-16'),
  },
{
    category: 'Entretien',
    name: 'Una tablette lave-vaisselle × 70 ',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/8360/1/0/_jcr_content/assets/imported-images/BILD_INTERNET66/8360_vaatwastabletten_2.png/_jcr_content/renditions/opt.1250w.png.res/1688168213861/opt.1250w.png',
    price: 4.99,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-22'),
  },
{
    category: 'Entretien',
    name: 'Tandil Color trio× 16 ',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/3004563/1/0/_jcr_content/assets/imported-images/BILD_INTERNET6/3004563_tandil_triocaps-3.png/_jcr_content/renditions/opt.1250w.png.res/1677214082501/opt.1250w.png',
    price: 3.65,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-22'),
  },
{
    category: 'Eau',
    name: 'Rocheval 2L',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/320/1/0/jcr:content/assets/imported-images/BILD_INTERNET3/0320_bronwater.png/jcr:content/renditions/opt.736w.png.res/1681861626919/opt.736w.png',
    price: 0.41,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-22'),
  },
{
    category: 'Eau',
    name: 'Rocheval 1.5L',
    image: 'https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/6877/1/0/jcr:content/assets/imported-images/BILD_INTERNET12/6877_mineraalwater-2.png/jcr:content/renditions/opt.736w.png.res/1681861023691/opt.736w.png',
    price: 0.40,
    supermarket: 'Aldi',
    lastModified: new Date('2023-07-22'),
  },
    {
    category: 'Eau',
    name: 'Pierval Carrefour 1.5L',
    image: 'https://cdn.carrefour.eu/1200_00167165_5400101161580_01.jpeg',
    price: 0.65,
    supermarket: 'Deliveroo Carrefour-express',
    lastModified: new Date('2023-07-16'),
  },
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
   /* { name: 'Fruits', image: 'https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg' },
    { name: 'Légumes', image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/L%C3%A9gumes_pour_ratatouille_au_march%C3%A9_d%27Apt.jpg' },
    { name: 'Viande', image: 'https://i.notretemps.com/1400x787/smart/2023/01/17/illustration-de-viande.jpeg' },
    { name: 'Papier toilette', image: 'https://cdn.webshopapp.com/shops/291748/files/331481689/1000x1000x2/jantex-toiletpapier-premium-40-stuk-3-laags-170-ve.jpg' },
    { name: 'Lasagne', image: 'https://images.radio-canada.ca/v1/alimentation/recette/4x3/lasagne-25129.jpg' },
    */
    { name: 'Eau', image: 'https://img.passeportsante.net/1200x675/2022-10-07/shutterstock-1280610196.webp' },
    { name: 'Pain', image: 'https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/pain_0.jpg?itok=Iw06GBaT' },
{ name: 'Choco', image: 'https://img.passeportsante.net/1200x675/2019-07-03/i89783-.webp' }, 
    { name: 'Entretien', image: 'https://www.destockplus.com/upload/300112_124446_PEEL_hvuejMpV.jpg' },  
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


