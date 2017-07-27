/**
 * Created by Mark_Naumenko on 6/19/2017.
 */
'use strict';

const Birth = require('./Birth'),
    Button = require('./../support/button');

class protractorSuperPo extends Birth {
    constructor () {
        super();
        this.continue = new Button('button[class*="continue"]');
        this.getBrandNewQuote = new Button('a.fancy-button--purple[data-ng-href*="new-journey"]'); //Landing Page
    }
}

module.exports = protractorSuperPo;
