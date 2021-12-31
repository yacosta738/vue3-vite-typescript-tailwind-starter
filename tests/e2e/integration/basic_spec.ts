// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h1', 'Vue 3, Vite, TypeScript & Tailwind CSS')
  })
})
