const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LumaShippingPage extends Page {
    /**
     * selectors using getter methods
     */
    get inputEmailAddress() {
        return $(`//input[contains(@data-bind,'textInput: email,')]`);
    }

    get inputFirstName() {
        return $(`input[name='firstname']`);
    }

    get inputLastName() {
        return $(`input[name='lastname']`);
    }

    get inputCompany() {
        return $(`input[name='company']`);
    }

    get inputStreetAddress() {
        return $(`input[name='street[0]']`);
    }

    get inputStreetAddress2() {
        return $(`input[name='street[1]']`);
    }

    get inputStreetAddress3() {
        return $(`input[name='street[2]']`);
    }

    get inputCity() {
        return $(`input[name='city']`);
    }

    get selectStateOrProvince() {
        return $(`select[name='region_id']`);
    }

    get inputZipOrPostalCode() {
        return $(`input[name='postcode']`);
    }

    get selectCountry() {
        return $(`select[name='country_id']`);
    }

    get inputPhoneNumber() {
        return $(`input[name='telephone']`);
    }

    get inputFlatRate() {
        return $(`input[value='flatrate_flatrate']`);
    }

    get inputBestWay() {
        return $(`input[value='tablerate_bestway']`);
    }

    get btnNext() {
        return $('.button.action.continue.primary');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */
  
    async completePurchaseOfTankTop(email,fname,lname,address,address2,address3,city,stateOrProvince,zip,country,phone){
        
        await this.tdOrderTotal.waitForDisplayed();
        await this.btnProceedToCheckout.isClickable();
        await this.btnProceedToCheckout.click();
        await this.fillOutShippingInfo(email,fname,lname,address,address2,address3,city,stateOrProvince,zip,country,phone);

    }


    async fillOutShippingInfo(email,fname,lname,address,address2,address3,city,stateOrProvince,zip,country,phone) {       

        await this.inputEmailAddress.setValue(email);
        await this.inputFirstName.setValue(fname);
        await this.inputLastName.setValue(lname);
        await this.inputStreetAddress.setValue(address);
        await this.inputStreetAddress2.setValue(address2);
        await this.inputStreetAddress3.setValue(address3);
        await this.inputCity.scrollIntoView();
        await this.inputCity.setValue(city);
        await this.selectStateOrProvince.waitForClickable()
        await this.selectStateOrProvince.selectByAttribute('data-title',stateOrProvince);    
        await this.inputZipOrPostalCode.setValue(zip); 
        await this.selectCountry.selectByAttribute('data-title',country);
        await this.inputPhoneNumber.scrollIntoView();
        await this.inputPhoneNumber.setValue(phone);
        await this.inputFlatRate.click();
        await this.btnNext.click();
    }


}

module.exports = new LumaShippingPage();