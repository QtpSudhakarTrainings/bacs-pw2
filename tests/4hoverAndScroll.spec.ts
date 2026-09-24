import { test, expect } from '@playwright/test';

test('hover scroll example', async ({ page }) => {
  await page.goto('https://api.jquery.com/hover/');

  await page.getByText("Demo:").last().scrollIntoViewIfNeeded();

  const frame = page.frameLocator('div#example-1-0 iframe');
  const element = frame.getByText("Milk");

  // let frameElement = page.locator('div#example-1-0 iframe').contentFrame();

  await element.hover();
  // await frame.locator('body').screenshot({ path: 'frame-screenshot.png' });

  await expect(frame.getByText("White")).toBeVisible();
});

// click : click()
// double click: dblclick(): https://api.jquery.com/dblclick/
// right click: click({button: 'right'}) : https://swisnl.github.io/jQuery-contextMenu/demo.html
// hover: hover(): https://api.jquery.com/hover/
// scroll: scrollintoviewifneeded: https://api.jquery.com/hover/
// drag and drop: locator("src").dragto(locator("tar"))
// https://jqueryui.com/droppable/


// npx playwright test tests/4hoverAndScroll.spec.ts -g "hover scroll example"