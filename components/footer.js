function footerComponent(element) {
  const footerEl = document.createElement("div");

  footerEl.innerHTML = `<div class="footer__container">
  <div class="logo__img-container">
    <img src="/icons/logo1.png" alt="" class="logo" />
  </div>
  <ul class="footer__list-container">
    <a href="/index.html" class="footer__link home">Home</a>
    <a href="/servicios.html" class="footer__link profile">Servicios</a>
    <a href="/contacto.html" class="footer__link phone">Contacto</a>
  </ul>
  <ul class="footer__socials-container">
    <a href="" class="footer__socials"><img src="icons/linkedin.png" alt=""></a>
    <a href="" class="footer__socials"><img src="icons/github.png" alt=""></a>
    <a href="" class="footer__socials"><img src="icons/twitter.png" alt=""></a>
  </ul>
  <p class="footer__copyright">C2024 - https://apx.school</p>
</div>`;

  element.appendChild(footerEl);
}
