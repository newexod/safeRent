import { SafeRentPage } from './app.po';

describe('safe-rent App', () => {
  let page: SafeRentPage;

  beforeEach(() => {
    page = new SafeRentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
