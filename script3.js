// script3.js

document.addEventListener("DOMContentLoaded", function () {
  // ... Code existant ...

  // Écouteur d'événement pour le bouton "Voir les produits à vérifier"
  const verifyButton = document.getElementById('verify-button');
  verifyButton.addEventListener('click', showProductsToVerify);
});

// Fonction pour afficher la liste des produits à vérifier
function showProductsToVerify() {


  
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  const verifyButton = document.createElement('button');
  verifyButton.textContent = 'Revenir en arrière';
  verifyButton.addEventListener('click', showAllProducts);

  productList.appendChild(verifyButton);

  // Obtenir la liste des produits à vérifier
  const productsToVerify = products.filter(product => isProductToVerify(product));

  // Trier les produits par ordre de produit à vérifier (du plus ancien au plus récent)
  productsToVerify.sort((a, b) => a.lastModified - b.lastModified);

  // Trouver le magasin avec les dates les plus anciennes
  const storeWithOldestProducts = getStoreWithOldestProducts(productsToVerify);

  // Afficher le nom du magasin
  const storeNameElement = document.createElement('h2');
  storeNameElement.textContent = `Magasin : ${storeWithOldestProducts[0].supermarket}`;
  productList.appendChild(storeNameElement);

  // Afficher les produits à vérifier du magasin sélectionné
  storeWithOldestProducts.forEach(product => {
    const productElement = document.createElement('li');
    productElement.classList.add('product-to-verify');

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <span class="product-name">${product.name}</span>
        <span class="product-price">Prix: ${product.price} €</span>
        <span class="product-last-modified">Dernière modification: ${product.lastModified.toLocaleDateString('fr-FR')}</span>
      </div>
    `;

    productList.appendChild(productElement);
  });
}

// Fonction pour afficher tous les produits
function showAllProducts() {
  displayProducts(products);
}

// Fonction pour vérifier si un produit doit être vérifié
function isProductToVerify(product) {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - product.lastModified.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return daysDifference >= 15;
}

// Fonction pour trouver le magasin avec les dates les plus anciennes
function getStoreWithOldestProducts(productsToVerify) {
  const storeMap = new Map();

  productsToVerify.forEach(product => {
    if (!storeMap.has(product.supermarket)) {
      storeMap.set(product.supermarket, []);
    }
    storeMap.get(product.supermarket).push(product);
  });

  let oldestStore = null;
  let oldestDate = new Date();

  for (const [store, products] of storeMap) {
    const oldestProduct = products.reduce((oldest, product) => {
      return product.lastModified < oldest.lastModified ? product : oldest;
    });

    if (oldestProduct.lastModified < oldestDate) {
      oldestDate = oldestProduct.lastModified;
      oldestStore = products;
    }
  }

  return oldestStore;
}
