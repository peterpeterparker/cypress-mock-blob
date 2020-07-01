context('Mock Http GET Blob', () => {
  beforeEach(() => {
    cy.server();

    // https://github.com/cypress-io/cypress/issues/1956
    cy.fixture('a.pdf', 'base64').then(dataURI => {
      return Cypress.Blob.base64StringToBlob(dataURI, 'application/pdf').then(blob => {
        return cy
          .route({
            url: /\/myroute\/.*/g,
            method: 'GET',
            response: '',
            onResponse: xhr => {
              xhr.response.body = blob;
              xhr.response.headers['content-type'] = 'application/pdf';
              xhr.response.headers['content-length'] = 11975;
            },
          })
          .then(() => {
            return cy.visit(`http://localhost:4200/`);
          });
      });
    });

  });

  it('Dummy', () => {
      cy.log('Should be ok');
  });

});
