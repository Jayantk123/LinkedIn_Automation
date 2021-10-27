const puppeteer = require("puppeteer");
const url="https://www.linkedin.com/";
let ans="Intuit Summer Intern(2023) referral\n\nHello Sir,\nHope you are safe and well.\n\nI am B. Tech Computer Science student, well versed with Data Structures and Algorithms.I have solved 500+ standard quality DS and Algo problems and have internship Experience.\nAlso I am 5 star at HackerRank and (1692) at Codechef. I have also done projects on web development.\nVia this opportunity, I am looking forward to enhancing my skills and work at this amazing organization.\nIt would be helpful if you could refer me for the Summer Intern role.\n\nThank you.\n\n\nhttps://drive.google.com/file/d/1Z1COgifEinVZNoa3G2NWg9zTdsvv3-kE/view?usp=sharing";
const username="sketchk237@gmail.com";
const pwd="Lightx@9810";
const search="Jayant Kumar";
let page;
// console.log("before");
// opens a browser
let browserOpenpromise = puppeteer.launch({headless:false
   , slowMo:true,
   args:['--start-maximized'],  
defaultViewport:null});


browserOpenpromise.then(function (browser){
// console.log("Browser opened");

// currently opened tab
let pageArraypromise = browser.pages();
return pageArraypromise;

// sidha promise call hora h niche
}).then(function (browserPages)
{
    page=browserPages[0];
    let gotoPromise = page.goto(url);
    // open linedin page

    return gotoPromise;
}).then(function()
{
let elementWaitPromise = page.waitForSelector("input[type='text']",{visible:true});
// wait for nect page
return elementWaitPromise;
}).then(function ()
{
 let key1WillBeSendPromise = page.type("input[type='text']",username,{delay:50});
//  type email

 return key1WillBeSendPromise;
    // console.log("reched");
}).then(function ()
{
 let key2WillBeSendPromise = page.type("input[type='password']",pwd,{delay:50});
//  type password

 return key2WillBeSendPromise;
    // console.log("reched");
}).then(function()
{ let enterWillBePressed = page.keyboard.press("Enter");
    // then enter
    return enterWillBePressed;
}).then(function()
{
let elementWaitPromise = page.waitForSelector(".search-global-typeahead__input.always-show-placeholder",{visible:true});
// wait for next page
return elementWaitPromise;
}).then(function ()
{
 let key1WillBeSendPromise = page.type(".search-global-typeahead__input.always-show-placeholder",search,{delay:50});
//  search in searchbox

 return key1WillBeSendPromise;
    // console.log("reched");
}).then(function()
{
    let enterWillBePressed = page.keyboard.press("Enter");
    // press enter
    return enterWillBePressed;
})
.then(function()
{
let elementWaitPromise = page.waitForSelector(".app-aware-link.artdeco-button.artdeco-button--default.artdeco-button--2.artdeco-button--primary",{visible:true});
// wait for next operation(view profile)
return elementWaitPromise;
})
.then(function ()
{
 let key1WillBeSendPromise = page.click(".app-aware-link.artdeco-button.artdeco-button--default.artdeco-button--2.artdeco-button--primary");
//  press view profile

 return key1WillBeSendPromise;
  
}).then(function()
{
let elementWaitPromise = page.waitForSelector(".message-anywhere-button.pvs-profile-actions__action.artdeco-button",{visible:true});
// wait for next operation(view profile)
return elementWaitPromise;
})
.then(function ()
{
 let key1WillBeSendPromise = page.click(".message-anywhere-button.pvs-profile-actions__action.artdeco-button",{delay:50});
//  press message 

 return key1WillBeSendPromise;
  
})
.then(function()
{
let elementWaitPromise = page.waitForSelector(".msg-form__msg-content-container--scrollable.scrollable.relative",{visible:true});
// wait for nect page
return elementWaitPromise;
}).then(function ()
{
 let key1WillBeSendPromise = page.type(".msg-form__msg-content-container--scrollable.scrollable.relative",ans,{delay:50});
//  type email

 return key1WillBeSendPromise;
    // console.log("reched");
})
.then(function()
{
let elementWaitPromise = page.waitForSelector(".msg-form__send-button.artdeco-button.artdeco-button--1",{visible:true});
// wait for nect page(send)
return elementWaitPromise;
}).then(function ()
{
 let key1WillBeSendPromise = page.click(".msg-form__send-button.artdeco-button.artdeco-button--1");
// click send button

 return key1WillBeSendPromise;
    // console.log("reched");
})
.then(function ()
{
    console.log("Completed");
})

.catch(function (err)
{
    console.log(err);
})

// console.log("after");
