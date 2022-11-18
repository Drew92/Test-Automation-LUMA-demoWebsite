
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for the order success page
 */
class LumaOrderSuccessPage extends Page {
    /**
     * selectors using getter methods
     */

    get spanThankYouMeassage(){
        return $(`.base`);
    }

    get spanOrderNumberGenerated(){
        return $(`div[class='checkout-success'] p span`);
    }

    get linkOrdersAndReturns(){
        return $(`a[href='https://magento.softwaretestingboard.com/sales/guest/form/']`);
    }

   /**
     * methods to encapsule automation code to interact with the order success page
     */
    async getOrderNumberToVerifyPurchase () {
        const orderNum = await this.spanOrderNumberGenerated.getText(); //gets order number need 
        await this.linkOrdersAndReturns.click();
        return orderNum;
    }

}

module.exports = new LumaOrderSuccessPage ();
