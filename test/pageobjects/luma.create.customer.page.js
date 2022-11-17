
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateCustomerPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('#firstname');
    }

    get inputLastName () {
        return $('#lastname');
    }

    get inputSignUpForNewsLetter () {
        return $('#is_subscribed');
    }

    get inputEmail() {
        return $('#email_address');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputConfirmPassword () {
        return $('#password-confirmation');
    }

    get btnCreateAnAccount () {
        return $(`button[title='Create an Account']`);
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async CreateNewUser (firstname, lastname,email,password) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(password);
        await this.btnCreateAnAccount.click();
    }

  
}

module.exports = new CreateCustomerPage();
