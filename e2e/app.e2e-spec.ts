import { RipperPage } from './app.po';

describe('ripper App', function() {
  let page: RipperPage;

  beforeEach(() => {
    page = new RipperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
