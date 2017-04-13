import { CurrencyWidgetPage } from './app.po';

describe('currency-widget App', () => {
  let page: CurrencyWidgetPage;

  beforeEach(() => {
    page = new CurrencyWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
