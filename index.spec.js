describe('Puppeteer', () => {
  beforeAll(async () => {
    await page.goto('file:///C:/Users/deads/Desktop/software-development-tools/index.html');
  });

  it('should be titled "puppeteer check"', async () => {
    await expect(page.title()).resolves.toMatch('puppeteer check');
  });
});