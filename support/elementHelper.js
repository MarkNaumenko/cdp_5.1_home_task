'use strict';

// const protractor = require('protractor');

class ElementHelper {

  waitForVisibilityOf(element, timeOut) {
    const timeoutMs = timeOut || browser.params.defaultTimeOut;
    return browser.wait(element, timeoutMs,
      `Waiting for visibilityOf of ${element} failed`);
  }

  waitForInVisibilityOf(element, timeOut) {
    const timeoutMs = timeOut || browser.params.defaultTimeOut;
    return browser.wait(protractor.ExpectedConditions.invisibilityOf(element), timeoutMs,
      `Waiting for invisibilityOf of ${element} failed`);
  }

  scrollAndWaitAndClick(element, top, timeOut) {
    const timeOutMs = timeOut || browser.params.defaultTimeOut;
    return this.waitForVisibilityOf(element, 5000).then(() => {
      return element.getLocation().then((navDivLocation2) => {
        let currTop = navDivLocation2.y;
        const currLeft = navDivLocation2.x;
        currTop -= top || 400;
        return browser.executeScript(`window.scrollTo(${currLeft}, ${currTop});`);
      });
    }).then(() => {
      return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), timeOutMs,
        `Waiting for element to be clickable of ${element} failed`);
    }).then(() => {
      return element.click();
    });
  }
}
module.exports = ElementHelper;