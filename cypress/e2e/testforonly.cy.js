describe ('Проверка наличия футера на указанных страницах', function() {
        const pages = ['/', '/projects', '/company', '/fields', '/job', '/blog', '/contacts']; // Список страниц для проверки
      
        pages.forEach((pageUrl) => {
            describe(`Страница ${pageUrl}`, () => {
              before(() => {
                cy.visit(`https://only.digital${pageUrl}`); 
              });
        
              it('Футер и указанные элементы присутствуют на странице', () => {
                cy.get('.Footer_grid__lfZ34').should('be.visible');
                cy.get('.Footer_grid__lfZ34 > .Button_regular__RLX5e').should('be.visible');
                cy.get('.Footer_grid__lfZ34 > .Telegram_telegramWrap__USZkq > .TextLink_link__8n_Xi').should('be.visible');
                
              });
            });
          });
        })