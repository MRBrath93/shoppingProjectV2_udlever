const productsEl = document.querySelector(".products")
// Anvend fetch til at hente data fra lokal JSON-Fil
fetch("./assets/js/watchesJson.json")
    .then(res => res.json())
    .then(urdata => {
        renderArticles(urdata.watches)
    })
    .catch(err => console.log("Ups det var ikke planen...", err))


function renderArticles(watches) {
    watches.forEach(watch => {
        productsEl.innerHTML += `
            <article class="product">
            <h3 class="product-title">${watch.name}</h3>
            <img src="./assets/img/${watch.imgUrl}" alt="${watch.name}" />
            <p class="product-description">
              ${watch.description}
            </p>
            <p class="product-price">${watch.price} kr</p>
            <button>
              Tilføj til kurv <i class="fa-solid fa-cart-plus"></i>
            </button>
          </article>
          `;

    });

}

