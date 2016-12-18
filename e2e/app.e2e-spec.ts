import { TortugaSabiaPage } from './app.po';

describe('tortuga-sabia App', function() {
  let page: TortugaSabiaPage;

  beforeEach(() => {
    page = new TortugaSabiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
