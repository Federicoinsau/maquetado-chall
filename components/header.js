function headerComponent(element) {
  const headerEl = document.createElement("div");

  headerEl.innerHTML = `<div class="header__container">
  <div class="logo__img-container">
    <img src="/icons/logo1.png" alt="" class="logo" />
  </div>
  <button class="header__open-menu-window">
  <img src="/icons/menu_open.png" alt=""></button>
  <div class="header__menu-window">
    <button class="header__close-menu-window">X</button>
    <div class="header__menu-window-content">
      <ul class="header__list-container">
        <a href="/portfolio.html" class="header__link">Portfolio</a>
        <a href="/servicios.html" class="header__link">Servicios</a>
        <a href="/contacto.html" class="header__link">Contacto</a>
      </ul>
    </div>
  </div>
</div>`;

  element.appendChild(headerEl);
}

function menuController() {
  const botonAbreMenuEl = document.querySelector(".header__open-menu-window");
  const botonCierraMenuEl = document.querySelector(
    ".header__close-menu-window"
  );
  const menuEl = document.querySelector(".header__menu-window");

  botonAbreMenuEl.addEventListener("click", () => {
    menuEl.style.display = "inherit";
  });
  botonCierraMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });
}
