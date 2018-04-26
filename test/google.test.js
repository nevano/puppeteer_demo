import { expect } from 'chai';
import puppeteer from 'puppeteer';

describe('Google', () => {
  it('searches for stuff', async () => {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://www.google.com/ncr');

     await browser.close();
  });
});