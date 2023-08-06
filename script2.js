// Fonction pour afficher la différence de temps entre la date actuelle et une date donnée
function getTimeDifference(product) {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - product.lastModified.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    const maxDays = 60; // Jours au-delà desquels la couleur sera rouge (2 mois)
    const minDays = 30; // Jours à partir desquels la couleur commencera à changer
  
    if (daysDifference >= maxDays) {
      product.lastModifiedStyle = `border: 2px solid red`;
    } else if (daysDifference >= minDays) {
      // Calculer la proportion de jours écoulés par rapport à la plage (maxDays - minDays)
      const progress = (daysDifference - minDays) / (maxDays - minDays);
  
      // Calculer les valeurs RGB pour la couleur en fonction de la proportion
      const red = 255;
      const green = Math.floor(255 - (progress * 255));
      const blue = 0;
  
      // Créer une couleur au format CSS (du jaune à rouge en fonction de la proportion)
      const borderColor = `rgb(${red}, ${green}, ${blue})`;
  
      product.lastModifiedStyle = `border: 2px solid ${borderColor}`;
    } else {
      product.lastModifiedStyle = '';
    }
  }
  
  // Fonction pour afficher les produits en tenant compte de leur âge
  function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      getTimeDifference(product); // Mettre à jour la date du produit en fonction de l'âge
  
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.setAttribute('style', product.lastModifiedStyle);
  
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
  
  // Fonction pour afficher la liste des produits à vérifier
  function displayProductsToVerify(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product-to-verify');
  
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Prix: ${product.price} €</p>
        <p>Supermarché: ${product.supermarket}</p>
        <p>Dernière modification: ${product.lastModified.toLocaleDateString('fr-FR')}</p>
      `;
  
      productContainer.appendChild(productElement);
    });
  }
  
  // Fonction pour cacher le site et afficher la liste des produits à vérifier
  function showProductsToVerify() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    const verifyButton = document.createElement('button');
    verifyButton.textContent = 'Revenir en arrière';
    verifyButton.addEventListener('click', showAllProducts);
  
    productList.appendChild(verifyButton);
  
    // ... Code pour récupérer et afficher la liste des produits à vérifier ...
    const productsToVerify = products.filter(product => {
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - product.lastModified.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      return daysDifference >= 15;
    });
  
    displayProductsToVerify(productsToVerify);
  }
  
  // Fonction pour afficher tous les produits
  function showAllProducts() {
    displayProducts(products);
  }
  
  // Autres fonctions et code restant du script1 (...)
  document.addEventListener("DOMContentLoaded", function () {
  // ... Code existant ...

  // Écouteur d'événement pour le bouton "Voir les produits à vérifier"
  const verifyButton = document.getElementById('verify-button');
  verifyButton.addEventListener('click', showProductsToVerify);
});