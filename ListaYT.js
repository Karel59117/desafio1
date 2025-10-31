const { USER_EMAIL, USER_PASSWORD } = require("./credenciales");

Feature('creacion de lista ');

Scenario('lista de reproduccion youtube',   ({ I }) => {
    I.amOnPage("/");
    I.click('[aria-label="Acceder"]');
    I.wait(3);
    I.fillField('[aria-label="Correo electrónico o teléfono"] ', USER_EMAIL);
    I.click('//*[@id="identifierNext"]/div/button/span');
    I.wait(3);
    I.fillField('[aria-label="Ingresa tu contraseña"]' , USER_PASSWORD);
    I.click('//*[@id="passwordNext"]/div/button/span');
    I.wait(5);
    I.click('[title="You"]');
    I.wait(2);
    I.click('[aria-label="Create new playlist"]');
    I.fillField('[placeholder="Choose a title"]', " Playwright Test ");
    I.click('[aria-label="Create"][aria-disabled="false"]');

    I.waitForElement('//*[@id="page-header"]/yt-page-header-renderer/yt-page-header-view-model/div/div[1]/div/yt-dynamic-text-view-model/h1/span' , 5);
    
    I.fillField('[class="ytSearchboxComponentInput yt-searchbox-input title"]', " Playwright Test ");
    I.pressKey("Enter");
    I.wait(3);
    I.click('[aria-label="React Testing with Playwright (Complete Tutorial) 32 minutes"]');
    I.wait(3);
   
    I.click('//*[@id="button-shape"]/button/yt-touch-feedback-shape/div[1]');
    I.wait(3);
    I.click("//yt-formatted-string[text()='Save']");
    I.wait(2);
    I.click("//span[text()='Playwright Test']");
    I.wait(5); 
    
});

