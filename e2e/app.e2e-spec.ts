import { RadialChartPage } from './app.po';

describe('radial-chart App', function() {
  let page: RadialChartPage;

  beforeEach(() => {
    page = new RadialChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
