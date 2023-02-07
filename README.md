
# LUMA Website Test Automation

### Website URL: https://magento.softwaretestingboard.com/

A WebdriverIO test automation project for the LUMA (demo) website. 
This project executes the following workflows: 

* SignUp
* Adding a Product to your Cart 
* Purchasing a Product 
* Verify Purchase in Order History

The project also contains some Unhappy Paths, a Data Driven test and uses the `NPM Faker` package.

## Instructions
- Navigate to the project's root directory in your Terminal.
- Enter the command `npm install` to initialize the project.
- Enter one of the given commands below to run their respective tests.

### Commands
- To execute the "Sign Up" test: `npm run sign-up`
- To execute the "Add Product to Cart" test with Unhappy paths: `npm run add-item-to-cart`
- To execute the "Purchasing a Product" test with data driven tests: `npm run purchase-item`
- To execute the "Verify Purchase in Order History" test: `npm run verify-purchase`

You my also execute all tests simultaneously using `npm run test-all`. Please note that this is **NOT RECOMMENDED** as it could lead to timeout errors and thus cause the test(s) to fail.

## Cross Browser Testing

This test automation project runs inside the Google Chrome browser by default. The test automation can also be configured to run inside the Firefox browser. To do this:

- Open the `wdio.conf.js` file.
- Go to the `capabilities` section.
- Comment line 59 that has `browserName: 'chrome',`.
- Uncomment line 60 that has `//browserName: 'firefox',`.
- Save the file and will now be executed in Firefox.

To run the test in Google Chrome again just undo these changes.
