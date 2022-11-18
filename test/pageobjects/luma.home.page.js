const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LumaHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get linkSignIn () {
        return $(`div[class='panel header'] li[data-label='or'] a`);
    }

    get linkCreateAnAccount () {
        return $(`//div[@class='panel header']//a[text()='Create an Account']`);
    }

    get imgArgusAllWeatherTank(){
        return $(`img[alt='Argus All-Weather Tank']`);
    }

    get linkAddToCartHomePage_AllWeatherTank(){
        return $(`strong[class='product-item-name'] a[title='Argus All-Weather Tank']`);
    }

/**
     * methods to encapsule automation code to interact with the page
     */
  

    async signIn ()
    {
        await this.linkSignIn.click();
    }

    async CreateAnAccount () {
        await this.linkCreateAnAccount.click();
    }


    async addAllWeatherTankTopToCart_HomePage() {
        await this.imgArgusAllWeatherTank.scrollIntoView();
        await this.imgArgusAllWeatherTank.moveTo();
        await this.linkAddToCartHomePage_AllWeatherTank.waitForClickable();
        await this.linkAddToCartHomePage_AllWeatherTank.click();
    }

}

module.exports = new LumaHomePage();
