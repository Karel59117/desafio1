Feature('tutorial');

Scenario('buscar',  ({ I }) => {
    I.amOnPage("/");
    I.fillField('//*[@id="center"]/yt-searchbox/div[1]/form/input' , "Tutorial playwright");
    I.wait(5);
    I.pressKey("Enter");
    I.wait(5);
});


Feature('reproducir video codeceptJS');

Scenario('reproducir',  ({ I }) => {
    I.amOnPage("https://www.youtube.com/results?search_query=Tutorial+de+CodeceptJS");
    I.wait(5);
    I.click('//*[@id="contents"]/yt-lockup-view-model[1]/div/a/yt-collection-thumbnail-view-model/yt-collections-stack/div/yt-thumbnail-view-model/div/img');
    I.wait(7);
});

