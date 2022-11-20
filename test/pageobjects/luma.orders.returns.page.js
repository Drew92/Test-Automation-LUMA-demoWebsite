
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for the orders and returns page
 */
class LumaOrderSuccessPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputOrderID(){
        return $(`#oar-order-id`);
    }

    get inputBillingLastName(){
        return $(`#oar-billing-lastname`);
    }

    get selectFindOrderBy(){
        return $(`#quick-search-type-id`);
    }

    get inputFindOrderByEmail(){
        return $(`#oar_email`);
    }

    get inputFindOrderByZipCode(){
        return $(`#oar_zip`);
    }

    get btnContinue(){
        return $(`button[title='Continue']`);
    }

    /**
     * methods to encapsule automation code to interact with the orders and returns page
     */

    async findOrder (orderNum,lname,email) {
    
        await this.inputOrderID.setValue(orderNum);
        await this.inputBillingLastName.setValue(lname);
        await this.selectFindOrderBy.selectByVisibleText('Email');
        await this.inputFindOrderByEmail.setValue(email);
        await this.btnContinue.waitForClickable();
        await this.btnContinue.click();
    }

}

module.exports = new LumaOrderSuccessPage ();
