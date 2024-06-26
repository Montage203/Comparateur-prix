// Données des produits 
 const products = [ 

 {  
      category: 'Pain',  
      name: 'EVERYDAY pain gris en tranches 800g',  
      image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/52/56/asset-3305256.jpg',  
      price: 0.99, 
      quantity: 0, 
      stockThreshold: 0, // Seuil de rupture de stock pour ce produit 
      supermarket: 'Colruyt',  
      lastModified: new Date('2024-03-22'),  
    }, 
 {  
      category: 'Pain',  
      name: 'EVERYDAY pain blanc tranches 800g',  
      image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/19/72/asset-1871972.jpg',  
      price: 0.99, 
      quantity: 1, 
      stockThreshold: 0, // Seuil de rupture de stock pour ce produit 
      supermarket: 'Colruyt',  
      lastModified: new Date('2024-03-22'),  
    }, 
 {  
      category: 'Pain',  
      name: 'EVERYDAY sandwiches au beurre 10pc',  
      image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/11/61/asset-3361161.jpg',  
      price: 0.99, 
      ancienprice: 1.15,
      quantity: 1, 
      supermarket: 'Colruyt',  
      lastModified: new Date('2024-03-22'),  
    }, 
{  
      category: 'Plats préparés',  
      name: 'EVERYDAY lasagne bolognaise 1kg',  
      image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/10/44/asset-3411044.jpg',  
      price: 2.69, 
      ancienprice: 2.79,
      quantity: 0, 
     stockThreshold: 1, // Seuil de rupture de stock pour ce produit 
      supermarket: 'Colruyt',  
      lastModified: new Date('2024-03-22'),  
    },  
     { 
     category: "Choco", 
     name: "EVERYDAY pâte à tartiner noisettes 750g", 
     image: "https://static.colruytgroup.com/images/500x500/std.lang.all/13/82/asset-3421382.jpg", 
     price: 1.98,
     ancienprice: 1.99,
     quantity: 2, 
     stockThreshold: 1, // Seuil de rupture de stock pour ce produit 
     supermarket: "Colruyt", 
     lastModified: new Date("2024-03-22"), 
   },
       { 
     category: "Sauce", 
     name: "EVERYDAY sauce bolognaise 990g", 
     image: "https://static.colruytgroup.com/images/500x500/std.lang.all/62/35/asset-3346235.jpg", 
     price: 2.06,
     quantity: 1, 
     supermarket: "Colruyt", 
     lastModified: new Date("2024-03-22"), 
   },
  /*
   {  
      category: 'Aclasser',  
      name: 'Saucisson de jambon 200g Boni',  
      image: 'https://images.collectandgo.be/images/step/JPG/JPG/500x500/std.lang.all/08/17/asset-710817.jpg',  
      price: 1.29, 
      supermarket: 'Colruyt',  
      lastModified: new Date('2023-08-10'),  
    },
{  
      category: 'Fruit',  
      name: 'Banane Boni ±1kg 1€74 (1€99 le 1kg)',  
      image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/79/42/asset-1767942.jpg',  
      price: 1.99,  
      supermarket: 'Colruyt',  
      lastModified: new Date('2023-08-07'),  
    },  
{ 
     category: 'Aclasser', 
     name: 'Sachet fruit réutilisable', 
     image: 'https://i0.wp.com/www.retaildetail.be/wp-content/uploads/2022/04/759665_7K29-CG-PS-plastic-zakje0003.jpg?resize=768%2C454&quality=100&strip=all&ssl=1', 
     price: 0.55,
     ancienprice: 0.55,
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   },
{ 
     category: 'Aclasser', 
     name: 'Balade crème culinaire 1L', 
     image: 'https://www.balade.be/userfiles/product/05411396034176a7n1se05068-av2.png', 
     price: 5.85, 
     oldprice: 1,
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   }, 
{ 
     category: 'Aclasser', 
     name: 'Boni Bacon fumé 2x100g', 
     image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/30/27/asset-3133027.jpg', 
     price: 2.20, 
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   }, 
{ 
     category: 'Aclasser', 
     name: 'Everyday citrons', 
     image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/70/48/asset-837048.jpg', 
     price: 1.69, 
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   }, 
{ 
     category: 'Aclasser', 
     name: 'Botte de jeunes carrottes à feuillage', 
     image: 'https://www.colruyt.be/content/dam/clp/lekker-koken/kooktips/lentegroenten/wortel_sfeer_bot_tafel.png/_jcr_content/renditions/cq5dam.web.1280.1280.png', 
     price: 1.49, 
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   }, 
{ 
     category: 'Aclasser', 
     name: 'chou-fleur 1pc', 
     image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/86/79/asset-348679.jpg', 
     price: 1.99, 
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   }, 
{ 
     category: 'Aclasser', 
     name: 'Boni huile d\'olive extra vierge 1L', 
     image: 'https://images.collectandgo.be/images/step/JPG/JPG/500x500/std.lang.all/62/64/asset-2516264.jpg', 
     price: 7.98, 
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
   }, 
{ 
     category: 'Aclasser', 
     name: 'Poulet entier 1k3 5€28 (4€09 les 1,291kg)', 
     image: 'https://static.colruytgroup.com/images/500x500/std.lang.all/05/72/asset-3120572.jpg', 
     price: 4.09, 
     supermarket: 'Colruyt', 
     lastModified: new Date('2023-08-02'), 
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
*/
  
/*{  
      category: 'Aclasser',  
      name: 'Lasagne bolognaise 1kg Chef select',  
      image: 'https://be-fr.openfoodfacts.org/images/products/405/648/903/5107/front_fr.5.full.jpg',  
      price: 3.29, 
      supermarket: 'Lidl',  
      lastModified: new Date('2023-10-27'),  
    }, 
{  
      category: 'Pizza',  
      name: 'Pizza Margherita x3 3€29',  
      image: 'https://images.openfoodfacts.org/images/products/405/648/944/3025/front_fr.67.full.jpg',  
      price: 1.1, 
      supermarket: 'Lidl',  
      lastModified: new Date('2023-10-27'),  
    }, 
{  
      category: 'Pizza',  
      name: 'Pizza Bolognaise x2 3€59',  
      image: 'https://images.openfoodfacts.org/images/products/405/648/927/0508/front_fr.3.full.jpg',  
      price: 1.79, 
      supermarket: 'Lidl',  
      lastModified: new Date('2023-10-27'),  
    }, 
{  
      category: 'Pain',  
      name: 'Pain 600/800g (Sac 2/3) Carrefour',  
      image: 'https://cdn.carrefour.eu/1200_06675813_T19.jpeg',  
      price: 2.85, 
      supermarket: 'Carrefour-express',  
      lastModified: new Date('2023-08-08'),  
    }, 
{  
      category: 'Choco',  
      name: 'Chocolat au lait 100g Bio Carrefour',  
      image: 'https://cdn.carrefour.eu/420_06751147_3270190128151_00.jpeg',  
      price: 1.45, 
      supermarket: 'Carrefour-express',  
      lastModified: new Date('2023-08-08'),  
    }, 
{ 
     category: 'Aclasser', 
     name: 'Sachet fruit réutilisable', 
     image: 'https://cdn.uc.assets.prezly.com/ea0071a8-7d2f-49b6-85b1-95b23232bfee/-/preview/1000x1500/-/format/auto/DSC_2904.jpg', 
     price: 0.55, 
ancienprice: 0.50,
     supermarket: 'Carrefour-express', 
     lastModified: new Date('2023-08-06'), 
      }, 
{ 
     category: 'Aclasser', 
     name: 'Sac papier/plastique', 
     image: 'https://onsefaitunebouffe.fr/wp-content/uploads/2020/05/LivraisonsCourses-CarrefourExpress.jpg', 
     price: 0.25, 
ancienprice: 0.25,
     supermarket: 'Carrefour-express', 
lastModified: new Date('2023-08-06'),
   }, 
{ 
     category: 'Pain', 
     name: 'La lorraine Pain campagne blanc', 
     image: 'https://static.delhaize.be/medias/sys_master/h06/hca/11211548229662.jpg', 
     price: 2.99, 
ancienprice: 2.99,
     supermarket: 'Carrefour-express', 
     lastModified: new Date('2023-09-08'), 
   }, 
 { 
     category: 'Pizza', 
     name: 'Pizza Tonno ×2 3€59', 
     image: 'https://imgproxy-retcat.assets.schwarz/FSkIHuKOk0EJaN0D3QKJAUGKzjBxe1_RI8d6J80ko-k/sm:1/w:1500/h:1125/cz/M6Ly9wcm9kLWNhd/GFsb2ctbWVkaWEvbmwvMS80NkRERkNBMjgxM0M0QjBGMkU2NEFBMjJ/EMUIyREY4Q0FCRDY0QkE0MDA5QTkxMjYzMzI3OUVFM0ExQjFCMEVDLmpwZw.jpg', 
     price: 1.79, 
ancienprice: 1.75,
     supermarket: 'Lidl', 
     lastModified: new Date('2023-10-27'), 
   }, 
 { 
     category: 'Sauce', 
     name: 'Sauce tomate Baresa 700g', 
     image: 'https://www.zupimages.net/up/23/31/276x.jpg', 
     price: 1.49, 
     supermarket: 'Lidl', 
     lastModified: new Date('2023-10-27'), 
   }, 
 { 
     category: "Eau", 
     name: "Ondine 1,5l", 
     image: "https://cdn.intermarche.com/fr/Content/images/boitmal/produit/zoom/673198192F0967FEB71B115437B3A398.jpg", 
     price: 0.41, 
     supermarket: "Intermarché", 
     lastModified: new Date("2023-07-29"), 
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
     price: 2.29,
ancienprice: 2.19,
     supermarket: "Lidl", 
     lastModified: new Date("2023-10-27"), 
   }, 
   { 
     category: "Choco", 
     name: "Delinut 750g tartine", 
     image: 
       "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/2907/1/0/_jcr_content/assets/imported-images/BILD_INTERNET11/2907_hazelnootpasta_1.png/_jcr_content/renditions/opt.1250w.png.res/1680046698759/opt.1250w.png", 
     price: 2.29, 
ancienprice: 2.55,
     supermarket: "Aldi", 
     lastModified: new Date("2023-08-17"), 
   }, 
   { 
     category: "Entretien", 
     name: "Una tablette Lave vaisselle tabs ×70 4€99", 
     image: 
       "https://www.aldi.be/content/aldi/belgium/promotions/source-localenhancement/2019/2019-01/2019-01-02/vast_assortiment/8360/1/0/_jcr_content/assets/imported-images/BILD_INTERNET66/8360_vaatwastabletten_2.png/_jcr_content/renditions/opt.1250w.png.res/1688168213861/opt.1250w.png", 
     price: 0.07, 
     /*quantity: 0, *//*
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
   }, */
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
  <p>Prix: ${product.price} € ${
  product.ancienprice !== undefined ? `<i style="color: gray">${product.ancienprice} €</i>` : ''
}</p>
<p>Supermarché: ${product.supermarket}</p>
<p>Dernière modification: ${product.lastModified.toLocaleDateString("fr-FR")}</p>
${product.quantity !== undefined ? `<p>Quantité en stock: <span style="color: ${
  product.quantity < product.stockThreshold ? 'red' : 'inherit'
}">${product.quantity}</span></p>` : ''}
${product.quantity !== undefined && product.quantity < product.stockThreshold ? '<p>Bientôt en rupture de stock</p>' : ''}
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
       <p>Prix: ${product.price} € <i style= color:gray>${product.ancienprice} €</i></p> 
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
        name: "Fruit",  
        image:  
          "https://www.pourquoidocteur.fr/media/article/COPY_istock-529664572-1674231819.jpg",
      },  
{  
        name: "Legume",  
        image:  
          "https://www.alexetalex.com/wp-content/uploads/2020/01/2-6.png",  
      },  
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
       name: "Plats préparés", 
       image: 
         "https://img.cuisineaz.com/680x357/2016/09/19/i3481-plats-cuisines-l-etiquetage-de-l-origine-des-ingredients-bientot-teste-en-france.jpg", 
     }, 
{ 
       name: "Aclasser", 
       image: 
         "https://images.kkeu.de/is/image/BEG/%C3%89quipement_de_bureau/Accessoires_de_bureau/Classeur_A4_%C3%A0_surface_en_plastique_pdplarge-mrd--AA00727211FF-01.jpg", 
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
