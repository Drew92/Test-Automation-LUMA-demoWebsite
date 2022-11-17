
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LumaLoginPage extends Page {
    /**
     * define selectors using getter methods
     */

     get banner() {
        return $('.base');
    }

    get inputEmail() {
        return $('#email');
    }

    get inputPassword () {
        return $(`input[title='Password']`);
    } 

    get btnSignIn()
    {
        return $(`button[class='action login primary']`);
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

}

module.exports = new LumaLoginPage();
