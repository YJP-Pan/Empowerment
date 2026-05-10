import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox']
});

const pages   = ['/', '/programs/', '/instructors/', '/testimonials/', '/partners/'];
const viewports = [{ w: 375, label: 'm' }, { w: 768, label: 't' }];

for (const vp of viewports) {
  for (const pg of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.w, height: 900 });
    await page.goto('http://localhost:3000' + pg, { waitUntil: 'load', timeout: 30000 });
    await page.evaluate(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.style.transition = 'none';
        el.classList.add('visible');
      });
    });
    await new Promise(r => setTimeout(r, 400));
    const slug = pg.replace(/\//g, '-').replace(/^-/, '').replace(/-$/, '') || 'home';
    const name = `temporary screenshots/rwd2-${vp.label}-${slug}.png`;
    await page.screenshot({ path: name, fullPage: true });
    await page.close();
    console.log('saved', name);
  }
}

await browser.close();
