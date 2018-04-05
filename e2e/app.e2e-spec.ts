import { EthanhanPage } from './app.po';

describe('ethanhan App', function() {
  let page: EthanhanPage;

  beforeEach(() => {
    page = new EthanhanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
