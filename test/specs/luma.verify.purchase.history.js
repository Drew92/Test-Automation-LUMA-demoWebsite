const LumaHomePage = require('../pageobjects/luma.home.page');
const LumaProductPage = require('../pageobjects/luma.product.page');
const LumaOrderSuccessPage = require('../pageobjects/luma.order.success.page');
const LumaShippingPage = require('../pageobjects/luma.shipping.page');
const LumaOrdersAndReturnsPage = require('../pageobjects/luma.orders.returns.page');
const { faker } = require('@faker-js/faker');

describe('Verify a purchase made in order history', () => {

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
        const orderNumber = await LumaOrderSuccessPage.getOrderNumberToVerifyPurchase();
        await LumaOrdersAndReturnsPage.findOrder(orderNumber,lname,email);
        
        await expect(LumaOrdersAndReturnsPage.spanOrderNumberTitle_OrderInfo).toHaveTextContaining(`Order # ${orderNumber}`);
    });
});