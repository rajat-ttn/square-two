const system = require('system');
const casper = require('casper').create();

const output = {
    firstPage:null,
    secondPage:null
};

// const input = {
//     input: JSON.parse(casper.cli.args[0])
// };

casper.start('https://www.amazon.com/');

casper.viewport(1600, 1000);
casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'); // required to fool Amazon

casper.then(function() {
    // hover over signin tab
    casper.mouse.move('#nav-link-accountList');
    // click sign in button
    casper.waitUntilVisible('#nav-flyout-ya-signin > a > span', function(){
        this.click('#nav-flyout-ya-signin > a > span');
    });
});

casper.then(function() {
    this.fill('form[name="signIn"]', {
        'email': 'alliancehari@gmail.com'
    }, true);
    this.click('input#continue.a-button-input');
});

casper.then(function() {
    casper.waitUntilVisible('#ap_password', function() {
        casper.capture('screenshots/signInPage.png');
    });
});

casper.then(function() {
    this.fill('form[name="signIn"]', {
        'password': 'PASSWORD_HERE'
    }, true);
    this.click('input#signInSubmit.a-button-input');

    casper.waitUntilVisible('#nav-link-accountList > span.nav-line-1', function() {
        casper.capture('screenshots/signInPage2.png');
    });
});

casper.thenOpen('https://www.amazon.com/exec/obidos/ASIN/B013CCTM2E');

casper.then(function(){
    casper.capture('screenshots/signInPage3.png');
});

casper.then(function(){
    this.click('#add-to-cart-button');
    casper.capture('screenshots/signInPage4.png');
});



casper.wait(5000, function() {
    //this.click('#hlb-ptc-btn-native');
    casper.capture('screenshots/signInPage5.png');
});


// casper.waitUntilVisible('#hlb-ptc-btn-native', function() {
//     this.click('#hlb-ptc-btn-native');
//     casper.capture('screenshots/signInPage5.png');
// });

casper.then(function(){
    //system.stdout.write(JSON.stringify(output, null, '\t'));
    //console.log(output);
});

casper.run();