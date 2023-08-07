// script2.js

import { products } from './script.js';

// Fonction pour afficher la différence de temps entre la date actuelle et une date donnée
function getTimeDifference(product) {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - product.lastModified.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    const maxDays = 60; // Nouvelle valeur pour le maximum de jours
    const changeColorDays = 30; // Nouvelle valeur pour le changement de couleur
    
    if (daysDifference >= maxDays) {
        product.lastModifiedStyle = `border: 2px solid red`;
    } else if (daysDifference >= changeColorDays) {
        const progress = (daysDifference - changeColorDays) / (maxDays - changeColorDays);
        const red = 255;
        const green = Math.floor(255 - (progress * 255));
        const blue = 0;
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
    
    // Trier les produits par ordre de magasin et par date la plus ancienne
    products.sort((a, b) => {
        // Comparer le magasin
        const supermarketComparison = a.supermarket.localeCompare(b.supermarket);
        if (supermarketComparison !== 0) {
            return supermarketComparison;
        }
        
        // Comparer la date la plus ancienne
        return a.lastModified - b.lastModified;
    });
    
    products.forEach(product => {
        getTimeDifference(product);
        
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
function showProductsToVerify() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const verifyButton = document.createElement('button');
    verifyButton.textContent = 'Revenir en arrière';
    verifyButton.addEventListener('click', showAllProducts);

    productList.appendChild(verifyButton);

    displayProducts(products); // Afficher tous les produits dans la liste de vérification
}

// Fonction pour afficher tous les produits
function showAllProducts() {
    displayProducts(products);
}

// Événement DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Écouteur d'événement pour le bouton "Voir les produits à vérifier"
    const verifyButton = document.getElementById('verify-button');
    verifyButton.addEventListener('click', showProductsToVerify);
});
