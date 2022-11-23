
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for the product page
 */
class LumaProductPage extends Page {

      /**
     * selectors using getter methods
     */

    get divSizeSmall(){
        return $(`#option-label-size-143-item-167`);
    }

    get divColorGray(){
        return $(`#option-label-color-93-item-52`);
    }

    get btnAddToCart_AllWeatherTank(){
        return $(`#product-addtocart-button`);
    }

    get alertItemAddedToCart() {
        return $(`.message-success.success.message`);
    }

    get linkShoppingCart(){
        return $(`//a[text()='shopping cart']`);
    }

    get inputQty(){
        return $('#qty');
    } 

    get divQtyError(){
        return $(`#qty-error`);
    }

    get divSizeRequiredFieldError(){
        return $(`//div[@id='super_attribute[143]-error']`);
    }
   
    /**
     * methods to encapsule automation code to interact with the product page
     */

    async addAllWeatherTankTopToCart(){
        await this.btnAddToCart_AllWeatherTank.waitForDisplayed();
        await this.divSizeSmall.click();
        await this.divColorGray.click();
        await this.btnAddToCart_AllWeatherTank.click();
    }

    async proceedToCheckoutTankTop(){
        await this.addAllWeatherTankTopToCart();
        await this.linkShoppingCart.click();
    }

    async addAllWeatherTankTopToCartWithoutSize(){
        await this.btnAddToCart_AllWeatherTank.waitForDisplayed();
        await this.divColorGray.click();
        await this.btnAddToCart_AllWeatherTank.click();
    }

}

module.exports = new LumaProductPage();
