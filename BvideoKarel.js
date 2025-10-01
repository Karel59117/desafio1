Feature('login');

Scenario('test something',  ({ I }) => {
    I.amOnPage("/");
    I.fillField('//*[@id="center"]/yt-searchbox/div[1]/form/input' , "Tutorial playwright");
    I.wait(5);
    I.pressKey("Enter");
    I.wait(5);
});
