const puppeteer = require("puppeteer");

let page;
// console.log("before");
// opens a browser
let browserOpenpromise = puppeteer.launch({headless:false});


browserOpenpromise.then(function (browser){
// console.log("Browser opened");

// currently opened tab
let pageArraypromise = browser.pages();
return pageArraypromise;

// sidha promise call hora h niche
}).then(function (browserPages)
{
    page=browserPages[0];
    let gotoPromise = page.goto("https://www.linkedin.com/");

    return gotoPromise;
}).then(function()
{
let elementWaitPromise = page.waitForSelector("input[type='text']",{visible:true});
return elementWaitPromise;
}).then(function ()
{
 let key1WillBeSendPromise = page.type("input[type='text']","9971452952");

 return key1WillBeSendPromise;
    // console.log("reched");
}).then(function ()
{
 let key2WillBeSendPromise = page.type("input[type='password']","Jayant@123");

 return key2WillBeSendPromise;
    // console.log("reched");
}).then(function()
{
    let enterWillBePressed = page.keyboard.press("Enter");
    return enterWillBePressed;
}).catch(function (err)
{
    console.log(err);
})

// console.log("after");
