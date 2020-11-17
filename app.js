const puppeteer = require("puppeteer");

const emojis = ["🔥", "⚡️", "💪", "😎", "😍", "😳", "🤯", "👊", "🤙", "🙌"];

const comment = "Test!"; // SET YOUR COMMENT HERE

const url = "CGz0fzqgeEC/";

/**
 * Uses Puppeteer to access Instagram and comment certain post
 */

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://instagram.com/");
  await page.waitFor(5000);
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', "USERNAME"); // SET YOUR USERNAME
  await page.type('input[name="password"]', "PASSWORD"); // SET YOUR PASSWORD
  await page.click('button[type="submit"]');
  await page.waitForSelector(".cmbtv");
  await page.click('button[type="button"]');
  await page.waitForSelector(".SCxLW");
  const page2 = await browser.newPage();
  await page2.goto(`https://www.instagram.com/p/${url}`);

  while (true) {
    await page2.waitForSelector("textarea");
    await page2.type(
      "textarea",
      `${comment} ${emojis[Math.floor(Math.random() * 10)]}`
    );
    await page2.click('button[type="submit"]');

    // SET YOUR OWN TIME
    // BETWEEN COMMENT AND COMMENT;
    // KEEP DECENT TIME BETWEEN EACH
    // OR ADD NEW ACTIONS
    // (LIKE POSTS OR FOLLOW ACCOUNTS)
    // SO INSTAGRAM DOESN'T BLOCK YOUR
    // ACTIVITY BECAUSE OF SPAM

    const time = Math.floor(Math.random() * 10000) + 200000;
    await page2.waitForTimeout(time);
  }
})();
