const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ducdt3006.github.io/Molop1_V2.1/?v=new#basic-math/1/1', { waitUntil: 'networkidle2' });
  
  const voices = await page.evaluate(() => {
    return new Promise(resolve => {
      let v = window.speechSynthesis.getVoices();
      if (v.length > 0) resolve(v.map(voice => ({name: voice.name, lang: voice.lang})));
      else {
        window.speechSynthesis.onvoiceschanged = () => {
          resolve(window.speechSynthesis.getVoices().map(voice => ({name: voice.name, lang: voice.lang})));
        }
      }
    });
  });
  
  console.log("Vietnamese Voices:", voices.filter(v => v.lang.toLowerCase().includes('vi')));
  
  // also check if the tts-btn exists
  const hasBtn = await page.evaluate(() => document.querySelector('.tts-btn') !== null);
  console.log("Has tts-btn:", hasBtn);
  
  const title = await page.evaluate(() => document.title);
  console.log("Title:", title);
  
  await browser.close();
})();
