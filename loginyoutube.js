const { USER_EMAIL, USER_PASSWORD } = require("./credenciales");

Feature('login');

Scenario('login en YouTube',  ({ I }) => {
    I.amOnPage("/");
    I.click("//a[contains(text(),'Sign in')]");
    I.wait(3);
    I.fillField('//*[@id="login_field"]' , USER_EMAIL);
    
    I.fillField('//*[@id="password"]' , USER_PASSWORD);
    I.click('[type="submit"][value="Sign in"]');
    I.wait(5);

    I.waitForElement('//*[@id="dashboard"]/h2', 5);
    I.wait(5);
    
    
     
    
    
    
});
