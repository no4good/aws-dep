const { expect } = require('chai');
require('dotenv').config();

const { PORT } = process.env;
describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url(`http://localhost:${PORT}`);
    const body = await $('body');
    const text = await body.getText();
    expect(text).to.eq('GET request to the homepage');
  });
});
