// Données des produits
const products = [
{
    category: 'Pizza',
    name: 'Pizza Tonno ×2 3€49',
    image: 'https://imgproxy-retcat.assets.schwarz/FSkIHuKOk0EJaN0D3QKJAUGKzjBxe1_RI8d6J80ko-k/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvbmwvMS80NkRERkNBMjgxM0M0QjBGMkU2NEFBMjJ/EMUIyREY4Q0FCRDY0QkE0MDA5QTkxMjYzMzI3OUVFM0ExQjFCMEVDLmpwZw.jpg',
    price: 1.75,
    supermarket: 'Lidl',
    lastModified: new Date('2023-07-01'),
  },
{
    category: 'Sauce',
    name: 'Sauce tomate Baresa 700g',
    image: 'https://www.zupimages.net/up/23/31/276x.jpg',
    price: 1.49,
    supermarket: 'Lidl',
    lastModified: new Date('2023-06-01'),
  },
{
    category: "Eau",
    name: "Ondine 1,5l",
    image: "https://cdn.intermarche.com/fr/Content/images/boitmal/produit/zoom/673198192F0967FEB71B115437B3A398.jpg",
    price: 0.41,
    supermarket: "Intermarché",
    lastModified: new Date("2023-06-29"),
  },
  {
    category: "Eau",
    name: "Native 1,5l",
    image: "https://www.usinesouvertes.fr/wp-content/uploads/2020/07/native-packshot2.jpg",
    price: 0.38,
    supermarket: "Intermarché",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Eau",
    name: "Cristaline 2l",
    image: "https://www.rob-brussels.be/media/catalog/product/cache/4674fdbecbe8e81d26c2d902fe2fbc48/b/e/b-ea-plpet-1140-b-ea-plpet-1140-image_1-230217_2420.jpg",
    price: 0.41,
    supermarket: "Intermarché",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Eau",
    name: "Boni Oiselle 1,5l",
    image: "https://static.colruytgroup.com/images/646x1000/fra/89/47/asset-2778947.jpg",
    price: 0.39,
    supermarket: "Colruyt",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Eau",
    name: "Everyday Louise 2l",
    image: "https://static.colruytgroup.com/images/646x1000/fra/79/90/asset-1247990.jpg",
    price: 0.39,
    supermarket: "Colruyt",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Choco",
    name: "Everyday choco tartine 750g",
    image: "https://static.colruytgroup.com/images/500x500/std.lang.all/78/71/asset-2747871.jpg",
    price: 1.99,
    supermarket: "Colruyt",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Entretien",
    name: "Apta Lave vaisselle tabs ×60 4€29",
    image: "https://imtc.qccdn.fr/test/pastille-lave-vaisselle/zoom/apta-intermarche-performance-tablets_001.jpg",
    price: 0.07,
    supermarket: "Intermarché",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Entretien",
    name: "Lave vaisselle tabs ×50 4€19",
    image: "https://media1.test-aankoop.be/images/43336BB28F07727D8E3CD8E1C0F5A4B272DB9A11/w600-c4/Vaatwasmiddelen-SANS-MARQUE---MERKLOOS-INTERMARCHE-MATCH-CORA-VAATWASTABLETTEN-CLASSIC.jpg",
    price: 0.08,
    supermarket: "Intermarché",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Entretien",
    name: "Apta Lessive duo tabs ×20 4€39",
    image: "https://www.zounko.com/products/3250392008772-apta-lessive-duodoses-detachant-actif-x-20-b-apta.jpg",
    price: 0.22,
    supermarket: "Intermarché",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Pain",
    name: "Baguette 250g",
    image: "https://cdn.intermarche.com/fr/Content/images/boitmal/produit/zoom/1FFA53827EBE8D943778D6A3C65854E5.jpg",
    price: 0.69,
    supermarket: "Intermarché",
    lastModified: new Date("2023-07-29"),
  },
  {
    category: "Choco",
    name: "Nussa 750g tartine",
    image:
      "https://imgproxy-retcat.assets.schwarz/P3XJC4cUGaP4GHd9L6PidzzcVTxVcyRo-_rBwce9zVs/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvYmUvMS80RUYzMDRDNTAxQzJBNzI0NzVEMUY0OUM/zQzY2MTk1OEQwMTU3ODBBMDU4MDZFRUZBOTNEMjkyNTFFOTJENkRELmpwZw.jpg",
    price: 2.19,
    supermarket: "Lidl",
    lastModified: new Date("2023-07-22"),
  },
  {
    category: "Choco",
    name: "Delinut 750g tartine",
    image:
      "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/2907/1/0/_jcr_content/assets/imported-images/BILD_INTERNET11/2907_hazelnootpasta_1.png/_jcr_content/renditions/opt.1250w.png.res/1680046698759/opt.1250w.png",
    price: 2.55,
    supermarket: "Aldi",
    lastModified: new Date("2023-07-22"),
  },
  {
    category: "Entretien",
    name: "Una tablette Lave vaisselle tabs ×70 4€99",
    image:
      "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/8360/1/0/_jcr_content/assets/imported-images/BILD_INTERNET66/8360_vaatwastabletten_2.png/_jcr_content/renditions/opt.1250w.png.res/1688168213861/opt.1250w.png",
    price: 0.07,
    quantity: 40,
    stockThreshold: 10, // Seuil de rupture de stock pour ce produit
    supermarket: "Aldi",
    lastModified: new Date("2023-07-22"),
  },
  {
    category: "Entretien",
    name: "Tandil Color trio Lessive tabs ×16 3€65",
    image:
      "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/3004563/1/0/_jcr_content/assets/imported-images/BILD_INTERNET6/3004563_tandil_triocaps-3.png/_jcr_content/renditions/opt.1250w.png.res/1677214082501/opt.1250w.png",
    price: 0.23,
    quantity: 10,
    stockThreshold: 5, // Seuil de rupture de stock pour ce produit
    supermarket: "Aldi",
    lastModified: new Date("2023-07-22"),
  },
  {
    category: "Eau",
    name: "Rocheval 2L",
    image:
      "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/320/1/0/jcr:content/assets/imported-images/BILD_INTERNET3/0320_bronwater.png/jcr:content/renditions/opt.736w.png.res/1681861626919/opt.736w.png",
    price: 0.41,
    supermarket: "Aldi",
    lastModified: new Date("2023-07-22"),
  },
  {
    category: "Eau",
    name: "Rocheval 1.5L",
    image:
      "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/6877/1/0/jcr:content/assets/imported-images/BILD_INTERNET12/6877_mineraalwater-2.png/jcr:content/renditions/opt.736w.png.res/1681861023691/opt.736w.png",
    price: 0.40,
    supermarket: "Aldi",
    lastModified: new Date("2023-07-22"),
  },
  {
    category: "Eau",
    name: "Pierval Carrefour 1.5L",
    image: "https://cdn.carrefour.eu/1200_00167165_5400101161580_01.jpeg",
    price: 0.65,
    supermarket: "Deliveroo Carrefour-express",
    lastModified: new Date("2023-08-01"),
  },
  {
    category: "Pain",
    name: "Baguette Carrefour 250g",
    image: "https://cdn.carrefour.eu/1200_01962796_5400101490079_00.jpeg",
    price: 0.89,
    supermarket: "Carrefour-express",
    lastModified: new Date("2023-08-01"),
  },
  {
    category: "Pain",
    name: "Baguette Carrefour 250g",
    image: "https://cdn.carrefour.eu/1200_01962796_5400101490079_00.jpeg",
    price: 0.89,
    supermarket: "Deliveroo Carrefour-express",
    lastModified: new Date("2023-08-01"),
  },
];

// Fonction pour afficher les catégories
function displayCategories(categories) {
  const categoryContainer = document.getElementById("product-categories");
  categoryContainer.innerHTML = "";

  categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("category");
    categoryElement.innerHTML = `
        <img src="${category.image}" alt="${category.name}">
        <span>${category.name}</span>
      `;
    categoryElement.addEventListener("click", () => {
      const filteredProducts =
        category.name === "Tout les produits"
          ? products
          : products.filter((product) => product.category === category.name);
      displayProducts(filteredProducts);
    });
    categoryContainer.appendChild(categoryElement);
  });
}

// Fonction pour afficher les produits
function displayProducts(products) {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    if (product.quantity <= product.stockThreshold) {
      productElement.classList.add("out-of-stock");
    }
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Prix: ${product.price} €</p>
        <p>Supermarché: ${product.supermarket}</p>
        <p>Dernière modification: ${product.lastModified.toLocaleDateString(
          "fr-FR"
        )}</p>
        <p>Quantité en stock: <span style="color: ${
          product.quantity < product.stockThreshold ? "red" : "inherit"
        }">${product.quantity}</span></p>
        ${
          product.quantity < product.stockThreshold
            ? "<p>Bientôt en rupture de stock</p>"
            : ""
        }
      `;
    productContainer.appendChild(productElement);
  });
}

// Fonction pour afficher le nombre total de produits et le nombre de produits par supermarché
function displayProductStats() {
  const totalProductsElement = document.getElementById("total-products");
  totalProductsElement.textContent = `Nombre total de produits : ${products.length}`;

  const productsBySupermarket = {};
  products.forEach((product) => {
    if (productsBySupermarket[product.supermarket]) {
      productsBySupermarket[product.supermarket]++;
    } else {
      productsBySupermarket[product.supermarket] = 1;
    }
  });

  const productsBySupermarketElement = document.getElementById(
    "products-by-supermarket"
  );
  productsBySupermarketElement.innerHTML = "";
  Object.entries(productsBySupermarket).forEach(([supermarket, count]) => {
    const supermarketElement = document.createElement("p");
    supermarketElement.textContent = `${supermarket}: ${count} produits`;
    productsBySupermarketElement.appendChild(supermarketElement);
  });
}

// Fonction pour trier les produits par ordre de prix
function sortProductsByPrice(products, sortOrder) {
  return products.sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );
}

// Fonction pour trier les produits par ordre alphabétique
function sortProductsByName(products, sortOrder) {
  return products.sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
}

// Fonction pour trier les produits par date de dernière modification
function sortProductsByLastModified(products, sortOrder) {
  return products.sort((a, b) =>
    sortOrder === "asc"
      ? a.lastModified - b.lastModified
      : b.lastModified - a.lastModified
  );
}

///////////////////////////////////////////////////////////

// Fonction pour afficher les produits bientôt en rupture de stock
function displayOutOfStockProducts() {
  const outOfStockProducts = products.filter(
    (product) => product.quantity === 0
  );
  const inStockProducts = products.filter((product) => product.quantity > 0);

  // Triez les produits en stock en fonction du supermarché et de la catégorie
  const sortedInStockProducts =
    sortProductsBySupermarketAndCategory(inStockProducts);

  const productListContainer = document.getElementById("product-list");
  productListContainer.innerHTML = "";

  sortedInStockProducts.forEach((product) => {
    const productElement = createProductElement(product);
    productListContainer.appendChild(productElement);
  });

  outOfStockProducts.forEach((product) => {
    const productElement = createProductElement(product);
    productListContainer.appendChild(productElement);
  });
}

// Fonction pour trier les produits par supermarché et par catégorie
function sortProductsBySupermarketAndCategory(products) {
  return products.sort((a, b) => {
    if (a.supermarket === b.supermarket) {
      return a.category.localeCompare(b.category);
    } else {
      return a.supermarket.localeCompare(b.supermarket);
    }
  });
}

// Fonction pour créer l'élément HTML représentant un produit
function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  if (product.quantity <= product.stockThreshold) {
    productElement.classList.add("out-of-stock");
  }
  productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Prix: ${product.price} €</p>
      <p>Supermarché: ${product.supermarket}</p>
      <p>Dernière modification: ${product.lastModified.toLocaleDateString(
        "fr-FR"
      )}</p>
      <p>Quantité en stock: <span style="color: ${
        product.quantity < product.stockThreshold ? "red" : "inherit"
      }">${product.quantity}</span></p>
      ${
        product.quantity < product.stockThreshold
          ? "<p>Bientôt en rupture de stock</p>"
          : ""
      }
    `;


  return productElement;
}

const showOutOfStockBtn = document.getElementById("showOutOfStockBtn");
showOutOfStockBtn.addEventListener("click", displayOutOfStockProducts);

///////////////////////////////////////////////////////////

// Fonction pour initialiser le site
function init() {
  const categories = [
    /* { name: 'Fruits', image: 'https://hips.hearstapps.com/hmg-prod/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg' },
      { name: 'Légumes', image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/L%C3%A9gumes_pour_ratatouille_au_march%C3%A9_d%27Apt.jpg' },
      { name: 'Viande', image: 'https://i.notretemps.com/1400x787/smart/2023/01/17/illustration-de-viande.jpeg' },
      { name: 'Papier toilette', image: 'https://cdn.webshopapp.com/shops/291748/files/331481689/1000x1000x2/jantex-toiletpapier-premium-40-stuk-3-laags-170-ve.jpg' },
      { name: 'Lasagne', image: 'https://images.radio-canada.ca/v1/alimentation/recette/4x3/lasagne-25129.jpg' },
      */
    {
      name: "Eau",
      image:
        "https://img.passeportsante.net/1200x675/2022-10-07/shutterstock-1280610196.webp",
    },
    {
      name: "Pain",
      image:
        "https://www.lanutrition.fr/sites/default/files/styles/article_large/public/ressources/pain_0.jpg?itok=Iw06GBaT",
    },
    {
      name: "Choco",
      image: "https://img.passeportsante.net/1200x675/2019-07-03/i89783-.webp",
    },
{
      name: "Pizza",
      image:
        "https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg",
    },
{
      name: "Sauce",
      image:
        "https://img.cuisineaz.com/660x660/2013/12/20/i7853-sauce-arrabiata.jpg",
    },
    {
      name: "Entretien",
      image:
        "https://www.destockplus.com/upload/300112_124446_PEEL_hvuejMpV.jpg",
    },
    {
      name: "Tout les produits",
      image:
        "https://media.sudouest.fr/7083913/1000x500/gdfgdfg.jpg?v=1637768353",
    },
  ];

  displayCategories(categories);
  displayProductStats();

  const sortSelect = document.getElementById("sort-select");
  sortSelect.addEventListener("change", () => {
    const sortOption = sortSelect.value;
    let sortedProducts = [];

    if (sortOption === "priceAsc" || sortOption === "priceDesc") {
      sortedProducts = sortProductsByPrice(
        products,
        sortOption === "priceAsc" ? "asc" : "desc"
      );
    } else if (sortOption === "nameAsc" || sortOption === "nameDesc") {
      sortedProducts = sortProductsByName(
        products,
        sortOption === "nameAsc" ? "asc" : "desc"
      );
    } else if (
      sortOption === "lastModifiedAsc" ||
      sortOption === "lastModifiedDesc"
    ) {
      sortedProducts = sortProductsByLastModified(
        products,
        sortOption === "lastModifiedAsc" ? "asc" : "desc"
      );
    }

    displayProducts(sortedProducts);
  });

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
  });
}

// Appel de la fonction d'initialisation
init();
