/**
 * Created by Mark_Naumenko on 6/12/2017.
 */
'use strict';

const po = require('./../page_objects/protractorPo.js'),
    po2 = require('./../page_objects/protractorPo2'),
    superP = require('./../page_objects/protractorSuperPo'),
    page1 = new po(),
    page2 = new po2(),
    superPage = new superP(),
    EC = protractor.ExpectedConditions;
let page;

describe('CDP Home Task - Protractor Framework Usage',() => {

    beforeAll(() => {
        browser.get('http://www.ci1-cms.gb.moneysupermarket.com/car-insurance/');
    });

    afterAll(() => {
        // browser.navigate().refresh();
    });

    beforeEach(() => {
        return  browser.getCurrentUrl().then((url) => {
            if (url.includes('high')) {
                console.log('high');
                return page = page1;
            }
            if (url.includes('about')) {
                console.log('about');
                return page = page2;
            }
            else {
                console.log('other');
                return page = superPage;
            }
        });
    });

    afterEach(() => {
        //switching logic depends on page
        return browser.getCurrentUrl().then((url) => {
           if (url.includes('high')) {
               return page2.continue.scrollAndWaitAndClick();
           }
        });
    });

    it('Mandatory fields filling on the LandingPage', () => {
        browser.executeScript('window.scrollTo(0, 100)');
        page.getBrandNewQuote.scrollAndWaitAndClick();
    });

    // it('Mandatory fields filling on the HighImpactPage', () => {
    //    page.postcode.setTextInputByValue('BB1 1BB');
    //    page.carRegNumber.setTextInputByValue('MF15MYC');
    //    page.addressSelectorFrankie.scrollAndWaitAndClick();
    //    page.findCarButton.click();
    //    page.dayOfBirth.sendKeys('01');
    //    page.monthOfBirth.sendKeys('01');
    //    page.yearOfBirth.sendKeys('1980');
    //    page.howLongHeldLicenceYear3.click();
    //    page.howLongHeldLicenceMonths5.click();
    //    page.medicalConditionsFalse.click();
    //    page.drivingOtherCarsFalse.click();
    //    page.hadOffencesNo.click();
    //    page.yearsNoClaimsDiscount2.click();
    //    page.policyStartDateTomorrow.click();
    // });
    //
    // it('Mandatory fields filling on the AboutTheCarPage', () => {
    //     page.startDrivingCarMonth.click();
    //     page.startDrivingCarYear.click();
    //     page.areYouRegisteredKeeper.click();
    //     page.milesPerYear.sendKeys(8000);
    //     page.overnightLocation.click();
    //     page.daytimeLocation.click();
    //     page.policyHolderName.sendKeys("test");
    //     page.policyHolderSurname.sendKeys("tester");
    // });

});
