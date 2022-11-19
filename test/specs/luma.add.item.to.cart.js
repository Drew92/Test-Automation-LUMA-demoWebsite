const LumaHomePage = require('../pageobjects/luma.home.page');
const LumaProductPage = require('../pageobjects/luma.product.page');


describe('Add product to cart', () => {

    it('should add Argus All-Weather Tank to cart', async () => {
        await LumaHomePage.open();
        //await LumaHomePage.btnAddToCartHomePage_AllWeatherTank.click();
        await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
        await LumaProductPage.addAllWeatherTankTopToCart();
        
    
        await expect(LumaProductPage.SuccessfulAlert).toBeExisting();
        await expect(LumaProductPage.SuccessfulAlert).toBeDisplayedInViewport();
        await expect(LumaProductPage.alertItemAddedToCart).toHaveTextContaining('added Argus All-Weather Tank');
    });
});


describe('Add product to cart - Unhappy Paths', () => {

    it('should prevent All Weather Tank Top from being added to cart when quantity is set to zero', async () => {

        await LumaHomePage.open();
        await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
        await LumaProductPage.inputQty.setValue(0);
        await LumaProductPage.addAllWeatherTankTopToCart();
        
        await expect(LumaProductPage.divQtyError).toHaveTextContaining(`Please enter a quantity greater than 0`);

    });

    it('should prevent All Weather Tank Top from being added to cart without selecting a size', async () => {

        await LumaHomePage.open();
        await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
        await LumaProductPage.addAllWeatherTankTopToCartWithoutSize();
        
        await expect(LumaProductPage.divSizeRequiredFieldError).toBeDisplayed();
        await expect(LumaProductPage.divSizeRequiredFieldError).toHaveTextContaining(`This is a required field.`);

    });   

});