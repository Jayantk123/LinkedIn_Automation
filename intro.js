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
    let gotoPromise = page.goto("https://www.google.co.in/");

    return gotoPromise;
}).then(function()
{
let elementWaitPromise = page.waitForSelector("input[type='text']",{visible:true});
return elementWaitPromise;
}).then(function ()
{
 let keyWillBeSendPromise = page.type("input[type='text']","pepcoding");
 return keyWillBeSendPromise;
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
