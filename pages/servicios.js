function main() {
  headerComponent(document.querySelector(".header"));
  menuController();
  welcomeComponent(fetchWelcomeServices());
  cardServicesComponent();
  footerComponent(document.querySelector(".footer"));
}

main();
