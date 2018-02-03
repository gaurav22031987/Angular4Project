import { KendoPage } from './app.po';

describe('kendo App', () => {
  let page: KendoPage;

  beforeEach(() => {
    page = new KendoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
