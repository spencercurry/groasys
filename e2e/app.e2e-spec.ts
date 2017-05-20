import { GroasysTestPage } from './app.po';

describe('groasys-test App', () => {
  let page: GroasysTestPage;

  beforeEach(() => {
    page = new GroasysTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
