function main() {
  headerComponent(document.querySelector(".header"));
  menuController();
  formComponent(document.querySelector(".contact__section"));
  footerComponent(document.querySelector(".footer"));
  formSend();
}

main();
