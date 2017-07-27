'use strict';

const CustomElement = require('./customElement.js');

class Dropdown extends CustomElement {

  constructor(cssSelector) {
    super(cssSelector);
  }

  getValue() {
    return this.getElement().element(by.css("option:checked")).getText();
  }

}
module.exports = Dropdown;