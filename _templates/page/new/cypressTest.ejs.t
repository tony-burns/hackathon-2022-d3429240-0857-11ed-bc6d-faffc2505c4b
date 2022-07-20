---
to: cypress/integration/<%= h.changeCase.camel(locals.componentName) %>.spec.ts
---
describe('<%= locals.componentName %> page', () => {
  it('Loads page', () => {
    cy.visit('/<%= h.changeCase.camel(locals.componentName) %>')
  })
})