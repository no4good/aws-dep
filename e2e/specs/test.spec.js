const { expect } = require('chai');

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url('http://localhost:3001');
    const body = await $('body');
    const text = await body.getText();
    expect(text).to.eq('GET request to the homepage');
  });
});
