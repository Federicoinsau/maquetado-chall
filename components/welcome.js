function welcomeComponent(banner) {
  const welcomeEl = document.createElement("div");
  const parentEl = document.querySelector(".welcome__section");

  welcomeEl.innerHTML = `<section class="welcome">
  <div class="welcome__container">
    <h1 class="welcome__title"></h1>
    <div class="welcome__subtitle"></div>
    <div class="welcome__img-container">
      <img class="welcome__img" src="" alt="welcome-image" />
      <img class="welcome__img-wide" src="" alt="welcome-image-wide" />
    </div>
  </div>
</section>`;

  banner.then((data) => {
    welcomeEl.querySelector(".welcome__title").textContent =
      data.items[0].fields.title;
    welcomeEl.querySelector(".welcome__subtitle").textContent =
      data.items[0].fields.subtitle;
    welcomeEl.querySelector(".welcome__img").src =
      data.includes.Asset[0].fields.file.url;
    welcomeEl.querySelector(".welcome__img-wide").src =
      data.includes.Asset[1].fields.file.url;
  });

  parentEl.appendChild(welcomeEl);
}

async function fetchWelcomeHome() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/wahtfgvwgclv/environments/master/entries?access_token=gY9v9dvWVqgnGtsC4radNI8zgoaPB_UbuHkYDyuTV7U&metadata.tags.sys.id[in]=welcome"
  );
  const data = await res.json();
  return data;
}

async function fetchWelcomeServices() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/wahtfgvwgclv/environments/master/entries?access_token=gY9v9dvWVqgnGtsC4radNI8zgoaPB_UbuHkYDyuTV7U&metadata.tags.sys.id[in]=welcomeServices"
  );
  const data = await res.json();
  return data;
}

async function fetchWelcomePortfolio() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/wahtfgvwgclv/environments/master/entries?access_token=gY9v9dvWVqgnGtsC4radNI8zgoaPB_UbuHkYDyuTV7U&metadata.tags.sys.id[in]=welcomePortfolio"
  );
  const data = await res.json();
  return data;
}
