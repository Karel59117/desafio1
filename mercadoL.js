

Feature('Mercado libre');


    Scenario('lista', async ({ I }) => {

    I.amOnPage('https://www.mercadolibre.com');
    I.click('[id="MX"]');
    I.waitForElement('[placeholder="Buscar productos, marcas y más…"]');
    I.fillField('[placeholder="Buscar productos, marcas y más…"]', 'playstation 5');
    I.pressKey("Enter");
    I.waitForElement('//span[contains(text(), "Nuevo")]', 3);
    I.click('//span[contains(text(), "Nuevo")]  ');
    I.wait(2);
    I.click('//span[contains(text(), "Local")]   ');
    I.wait(2);
    I.click('[class="andes-dropdown__standalone-arrow"]');
    I.waitForElement('[data-key="price_desc"]', 3);
    I.click('[data-key="price_desc"]');
    I.waitForElement('[placeholder="Buscar productos, marcas y más…"]', 3);
    I.waitForVisible('[class="ui-search-layout__item"]');
    for (let i = 1; i <= 5; i++) {
        const nProducto = await I.grabTextFrom('[class="poly-component__title"]');
        const pProducto = await I.grabTextFrom('[class="poly-component__price"]');
        console.log(`Producto ${i}: ${nProducto} - Precio: ${pProducto}`);
    }

});





