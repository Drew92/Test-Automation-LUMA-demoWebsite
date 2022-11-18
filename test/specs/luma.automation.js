const LumaHomePage = require('../pageobjects/luma.home.page');
const LumaLoginPage = require('../pageobjects/luma.login.page');
const LumaCreateCustomerPage = require('../pageobjects/luma.create.customer.page');
const LumaOrderSuccessPage = require('../pageobjects/luma.order.success.page');
const LumaShippingPage = require('../pageobjects/luma.shipping.page');
const LumaOrdersAndReturnsPage = require('../pageobjects/luma.orders.returns.page');
const LumaProductPage = require('../pageobjects/luma.product.page');
const { faker } = require('@faker-js/faker');


describe('Luma Automation Assignment', () => {

    it('should create new user account successfully', async () => {
        await LumaHomePage.open();
        await LumaHomePage.CreateAnAccount();
        await LumaCreateCustomerPage.CreateNewUser(faker.name.firstName(),faker.name.lastName(),faker.internet.email(),faker.internet.password(25));
        
       
        await expect(LumaCreateCustomerPage.SuccessfulAlert).toBeExisting();
        await expect(LumaCreateCustomerPage.SuccessfulAlert).toBeDisplayedInViewport();
        await expect(LumaCreateCustomerPage.SuccessfulAlert).toHaveTextContaining('Thank you for registering');
        await LumaCreateCustomerPage.btnCustomerMenuExpander.click();
        await LumaCreateCustomerPage.linkSignOut.click();
    });

    // it('should login with valid credentials', async () => {
    //     await LumaHomePage.open();
    //     await LumaHomePage.signIn();
    //     await LumaLoginPage.login('roni_cost@example.com','roni_cost3@example.com');

    ////     await expect().toBeExisting();
    ////     await expect().toHaveTextContaining('');
    // });

    it('should add Argus All-Weather Tank to cart', async () => {
        await LumaHomePage.open();
        //await LumaHomePage.btnAddToCartHomePage_AllWeatherTank.click();
        await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
        await LumaProductPage.addAllWeatherTankTopToCart();
        
       
        await expect(LumaProductPage.SuccessfulAlert).toBeExisting();
        await expect(LumaProductPage.SuccessfulAlert).toBeDisplayedInViewport();
        await expect(LumaProductPage.alertItemAddedToCart).toHaveTextContaining('added Argus All-Weather Tank');
    });

    it('should purchase Argus All-Weather Tank', async () => {
        await LumaShippingPage.open();           
        await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
        await LumaProductPage.proceedToCheckoutTankTop();
        await LumaShippingPage.completePurchaseOfTankTop(faker.internet.email(),faker.name.firstName(),faker.name.lastName(),
                                                        faker.address.streetAddress(),faker.address.street(),faker.address.county(),
                                                        faker.address.cityName(),faker.address.state(),faker.address.zipCode('#####-####'),
                                                        'United States',faker.phone.number('###-###-###') );

        await LumaShippingPage.btnPlaceOrder.waitForClickable();
        await LumaShippingPage.btnPlaceOrder.click();
        await expect(LumaOrderSuccessPage.spanThankYouMeassage).toHaveTextContaining('Thank you for your purchase');
    });

    it('should purchase Argus All-Weather Tank and verify purchase in order history', async () => {

        const email=faker.internet.email(),lname=faker.name.lastName();
       
        await LumaShippingPage.open();           
        await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
        await LumaProductPage.proceedToCheckoutTankTop();
        await LumaShippingPage.completePurchaseOfTankTop(email,faker.name.firstName(),lname,
                                                        faker.address.streetAddress(),faker.address.street(),faker.address.county(),
                                                        faker.address.cityName(),faker.address.state(),faker.address.zipCode('#####-####'),
                                                        'United States',faker.phone.number('###-###-###') );

        await LumaShippingPage.btnPlaceOrder.waitForClickable();
        await LumaShippingPage.btnPlaceOrder.click();
        const orderNumber = await LumaOrderSuccessPage.verifyOrderPurchase();
        await LumaOrdersAndReturnsPage.findOrder(orderNumber,lname,email);


        await expect(LumaOrdersAndReturnsPage.spanOrderNumberTitle_OrderInfo).toHaveTextContaining(`Order # ${orderNumber}`);
    });

});

describe('Luma Automation Assignment - Unhappy Paths', () => {

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
