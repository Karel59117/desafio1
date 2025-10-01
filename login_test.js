Feature('login');

Scenario('test something',  ({ I }) => {
    I.amOnPage("/");
    I.fillField('//*[@id="center"]/yt-searchbox/div[1]/form/input' , "Tutorial de CodeceptJS");
    I.wait(5);
    I.pressKey("Enter");
    I.wait(5);
    I.click('//*[@id="contents"]/yt-lockup-view-model[1]/div/a/yt-collection-thumbnail-view-model/yt-collections-stack/div/yt-thumbnail-view-model/div/img');
    I.wait(15);
});
