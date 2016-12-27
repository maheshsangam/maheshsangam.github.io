import { AngcliproPage } from './app.po';

describe('angclipro App', function() {
  let page: AngcliproPage;

  beforeEach(() => {
    page = new AngcliproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
