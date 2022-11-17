
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
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
     * methods to encapsule automation code to interact with the page
     */
    async verifyOrderPurchase () {
        const orderNum = await this.spanOrderNumberGenerated.getText();
        await this.linkOrdersAndReturns.click();
        return orderNum;
    }

}

module.exports = new LumaOrderSuccessPage ();
