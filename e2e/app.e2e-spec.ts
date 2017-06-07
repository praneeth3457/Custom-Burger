import { CustomBurgerPage } from './app.po';

describe('custom-burger App', () => {
  let page: CustomBurgerPage;

  beforeEach(() => {
    page = new CustomBurgerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
