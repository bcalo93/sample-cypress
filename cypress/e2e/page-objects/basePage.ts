export default class BasePage {
  protected pageUrl: string;
  navigate() {
    cy.visit(this.pageUrl);
    return this;
  }
}
