describe("Calculator Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("shouldbe able to perform an arithmetical operations and update the display", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number7").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "8");
  });

  it("shoudl be able to chain multiple operators together", () => {
    cy.get("#number3").click();
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number7").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "76");
  });

  it("should be able to check outcome as expected for a range of numbers (for example positive numbers)", () => {
    cy.get("#number5").click();
    cy.get("#operator-subtract").click();
    cy.get("#number1").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  });

  it("should be able to check outcome as expected for a range of numbers (for example negative numbers)", () => {
    cy.get("#number5").click();
    cy.get("#operator-subtract").click();
    cy.get("#number6").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-1");
  });

  it("should be able to check outcome as expected for a range of numbers (for example, very large numbers)", () => {
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "1000000000000");
  });

  it("should be able to check outcome as expected for a range of numbers (for example decimal numbers)", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.5");
  });

  it("should be able to return an error message when a number is divided by zero)", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Error");
  });
});
