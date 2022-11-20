const LumaHomePage = require('../pageobjects/luma.home.page');
const LumaProductPage = require('../pageobjects/luma.product.page');
const LumaOrderSuccessPage = require('../pageobjects/luma.order.success.page');
const LumaShippingPage = require('../pageobjects/luma.shipping.page');
const customerEmailTestData = require('../data/customerEmails');
const { faker } = require('@faker-js/faker');

describe('Purchase items on Luma website', () => {

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
});


describe('Enter cutomer email for shipping - Data Driven Test', ()=>{

    for (const customer of customerEmailTestData){
        it(`should attempt to enter ${customer.email!=' '?customer.email:'empty space'} in email address field for shipping`,async ()=>{

            await LumaShippingPage.open();           
            await LumaHomePage.addAllWeatherTankTopToCart_HomePage();
            await LumaProductPage.proceedToCheckoutTankTop();
            await LumaShippingPage.enterCustomerEmailForShipping_DataDrivenTest(customer.email,faker.name.firstName(),faker.name.lastName(),
                                                                                faker.address.streetAddress(),faker.address.street(),faker.address.county(),
                                                                                faker.address.cityName(),faker.address.state(),faker.address.zipCode('#####-####'),
                                                                                'United States',faker.phone.number('###-###-###') );
            if(customer.email==='correctFormat@gmail.com'){
                await expect(await LumaShippingPage.divCustomerEmailError.isDisplayed()).toEqual(false);
            }else{
                await expect(LumaShippingPage.divCustomerEmailError).toHaveTextContaining(customer.errorMessage);
            }
        });
    }
});
