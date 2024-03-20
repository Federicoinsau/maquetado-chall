function getBio() {
  const titleEl = document.querySelector(".introduction__text-title");
  const bioEl = document.querySelector(".introduction__text-bio");
  const bioImgEl = document.querySelector(".introduction__img");

  fetch(
    "https://cdn.contentful.com/spaces/wahtfgvwgclv/environments/master/entries?access_token=gY9v9dvWVqgnGtsC4radNI8zgoaPB_UbuHkYDyuTV7U&metadata.tags.sys.id[in]=bio"
  )
    .then((res) => res.json())
    .then((data) => {
      titleEl.textContent = data.items[0].fields.title;
      bioEl.textContent = data.items[0].fields.biography;
      bioImgEl.src = data.includes.Asset[0].fields.file.url;
    });
}

function main() {
  headerComponent(document.querySelector(".header"));
  menuController();
  welcomeComponent(fetchWelcomeHome());
  footerComponent(document.querySelector(".footer"));
  getBio();
  cardServicesComponent();
  formComponent(document.querySelector(".contact__section"));
  formSend();
}

main();
