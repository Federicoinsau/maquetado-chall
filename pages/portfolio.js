function main() {
  headerComponent(document.querySelector(".header"));
  menuController();
  welcomeComponent(fetchWelcomePortfolio());
  cardPortfolioComponent();
  footerComponent(document.querySelector(".footer"));
}

main();
