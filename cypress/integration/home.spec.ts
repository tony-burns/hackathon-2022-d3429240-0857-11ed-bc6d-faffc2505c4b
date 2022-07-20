describe('Home page ', () => {
  it('loads', () => {
    cy.visit('/')
    cy.get('[data-cy=home-page]').contains('Next.js Template')
  })
})
