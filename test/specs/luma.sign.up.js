const LumaHomePage = require('../pageobjects/luma.home.page');
const LumaCreateCustomerPage = require('../pageobjects/luma.create.customer.page');
const { faker } = require('@faker-js/faker');

describe('Luma Sign Up/Create new account', () => {

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

});