export default class BasePage {
  protected pageUrl: string;
  navigate() {
    cy.visit(this.pageUrl);
    return this;
  }

  protected typeInField(selector: string, text: string) {
    cy.get(selector).type(text);
  }
}
