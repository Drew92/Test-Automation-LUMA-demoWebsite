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

    get linkAddToCartHomePage_AllWeatherTank(){
        return $(`strong[class='product-item-name'] a[title='Argus All-Weather Tank']`);
    }

    get btnAddToCartHomePage_AllWeatherTank(){
        return $(`body > div:nth-child(5) > main:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ol:nth-child(1) > li:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4)`)
    }

    // get btnAddToCartHomePage_AllWeatherTank(){
    //     return $(`strong[class='product-item-name'] a[title='Argus All-Weather Tank']`);
    // }

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


    async clickAddToCartBtnForAllWeatherTankTop_HomePage() {
        await this.linkAddToCartHomePage_AllWeatherTank.scrollIntoView();
        await this.linkAddToCartHomePage_AllWeatherTank.moveTo();
        await this.btnAddToCartHomePage_AllWeatherTank.click();
    }

}

module.exports = new LumaHomePage();
