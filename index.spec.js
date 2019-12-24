describe('Puppeteer', () => {
  beforeAll(async () => {
    await page.goto('file:///C:/Users/deads/Desktop/software-development-tools/index.html');
  });

  it('should be titled "puppeteer check"', async () => {
    await expect(page.title()).resolves.toMatch('puppeteer check');
  });

  it('test of inputs', async () => {
    await page.click('#a1');
    await page.type('#a1','asdfr');
    var openedInputText = await page.$eval('#a1', el => el.value);
    expect(openedInputText).toEqual('asdfr');
    var closedInputText = await page.$eval('#a2', el => el.value);
    expect(closedInputText).toEqual('asdfr');
  });

  it('test of clearing', async () => {
    var openedInputText = await page.$eval('#a1', el => el.value);
    expect(openedInputText).toEqual('asdfr');
    var closedInputText = await page.$eval('#a2', el => el.value);
    expect(closedInputText).toEqual('asdfr');
    await page.click('button[type="reset"]');
    var openedInputText = await page.$eval('#a1', el => el.value);
    expect(openedInputText).toEqual('');
    var closedInputText = await page.$eval('#a2', el => el.value);
    expect(closedInputText).toEqual('');
  });
});