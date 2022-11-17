
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
  
    open () {
        return browser.url(`https://magento.softwaretestingboard.com/`)
    }

    get SuccessfulAlert () {
        return $('.message-success.success.message');
    }

    get tdOrderTotal(){
        return $(`td[data-th='Order Total']`);
    }

    get btnProceedToCheckout(){
        return $(`button[data-role='proceed-to-checkout']`);
    }

    get btnPlaceOrder(){
        return $(`button[title='Place Order']`);
    }

    get spanOrderNumberTitle_OrderInfo(){
        return $(`.base`);
    }

    get btnCustomerMenuExpander(){
        return $(`div[class='panel header'] button[type='button']`);
    }

    get linkSignOut(){
        return $(`div[aria-hidden='false'] li[data-label='or'] a`);
    }

}
