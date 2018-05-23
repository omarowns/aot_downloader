const puppeteer = require('puppeteer');

// Scrape Image URLs
// Visits the url, finds all the images and returns all the src URLs
module.exports = async (url) => {
  console.log('🚀  Launching...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log(`🌎  Visiting web page ${url}...`);
  await page.goto(url);

  console.log('⛏  Scraping image URLs...');

  const imageSelector = 'div.img_container center img';
  // await page.waitForSelector(imageSelector, { timeout: 3000 });

  const results = await page.evaluate(imageSelector => {
    const elements = document.querySelectorAll(imageSelector);
    /*
     * Spreads elements into an array to filter, then creates a new array of
     * only the URLs
     * You can customize this to add another filter below the first if
     * looking for more specific criteria -- refer to blog post
    */
    const imgs = [...elements]
          .filter(el => el.src.search(/(.jpg)|(.png)/) >= 0)
          .map(el => el.src)
          .map(src => src.replace('?w=640', ''));

    return Promise.resolve(imgs);
  }, imageSelector);
  browser.close();
  return results;
}
