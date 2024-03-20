function cardComponent(item) {
  const cardEl = document.createElement("div");
  const parentEl = document.querySelector(".services");

  cardEl.innerHTML = `<div class="services__card-container">
    <div class="services__card">
      <div class="services__card__img-container">
      <img class="services__card__img" src="" alt="" />
      </div>
      <h3 class="services__card__title"></h3>
      <p class="services__card__description"></p>
    </div>
  </div>`;

  cardEl.querySelector(".services__card__img").src = item.image;
  cardEl.querySelector(".services__card__title").textContent = item.title;
  cardEl.querySelector(".services__card__description").textContent =
    item.description;

  parentEl.appendChild(cardEl);
}

//-------------------------------------------------------------------------

async function fetchServices() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/wahtfgvwgclv/environments/master/entries?access_token=gY9v9dvWVqgnGtsC4radNI8zgoaPB_UbuHkYDyuTV7U&metadata.tags.sys.id[in]=services"
  );
  const data = await res.json();
  return data;
}

async function fetchPortfolio() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/wahtfgvwgclv/environments/master/entries?access_token=gY9v9dvWVqgnGtsC4radNI8zgoaPB_UbuHkYDyuTV7U&metadata.tags.sys.id[in]=portfolio"
  );
  const data = await res.json();
  return data;
}

function parseFetchedResults(data) {
  const results = data.then((data) => {
    const imgCollection = data.includes.Asset.map((img) => {
      return img.fields.file.url;
    });
    const fieldCollections = data.items.map((item) => {
      return {
        title: item.fields.title,
        description: item.fields.description,
        image: imgCollection,
      };
    });
    return fieldCollections;
  });
  return results;
}

function cardServicesComponent() {
  const dat = parseFetchedResults(fetchServices());
  dat.then((data) => {
    for (const item of data) {
      cardComponent(item);
    }
  });
}

function cardPortfolioComponent() {
  const dat = parseFetchedResults(fetchPortfolio());
  dat.then((data) => {
    for (const item of data) {
      cardComponent(item);
    }
  });
}
