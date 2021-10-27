const fs = require("fs");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");


const puppeteer = require("puppeteer");
const url="https://www.linkedin.com/";
let ans="Intuit Summer Intern(2023) referral\n\nHello Sir,\nHope you are safe and well.\n\nI am B. Tech Computer Science student, well versed with Data Structures and Algorithms.I have solved 500+ standard quality DS and Algo problems and have internship Experience.\nAlso I am 5 star at HackerRank and (1692) at Codechef. I have also done projects on web development.\nVia this opportunity, I am looking forward to enhancing my skills and work at this amazing organization.\nIt would be helpful if you could refer me for the Summer Intern role.\n\nThank you.\n\n\nhttps://drive.google.com/file/d/1Z1COgifEinVZNoa3G2NWg9zTdsvv3-kE/view?usp=sharing";
// const username="sketchk237@gmail.com";
// const pwd="Lightx@9810";
// const search="Jayant Kumar";

const username="jayantk237@gmail.com";
const pwd="Jayant@123";
const search="intuit";

(async function () {
    try {
      let browserInst = await puppeteer.launch({
        headless: false,
        slowMo: true,
        args: ["--start-maximized"],
        defaultViewport: null,
      });

      let newtab = await browserInst.newPage();
    //   signin
      await newtab.goto(url);
      await newtab.type("input[type='text']", username, { delay: 50 });
      await newtab.type("input[type='password']", pwd, { delay: 50 });
      await newtab.keyboard.press("Enter");



// search
      await waitandClick(".search-global-typeahead__input.always-show-placeholder",newtab);
      await newtab.type(".search-global-typeahead__input.always-show-placeholder",search,{delay:50});
      await newtab.keyboard.press("Enter");


    //   
    await waitandClick("button[aria-label='People']",newtab);
    await waitandClick(".search-reusables__filter-trigger-and-dropdown",newtab);
    await waitandClick("input[name='connections-filter-value']",newtab);
    await waitandClick("button[data-control-name='filter_show_results']",newtab);

    // span[dir='ltr']
    await newtab.waitForSelector(".entity-result__title-text .app-aware-link",{visible:true});
    const arrays = await newtab.$$(".entity-result__title-text .app-aware-link");
// .entity-result__actions.entity-result__divider .artdeco-button__text
console.log(arrays.length);
for(let i=0;i<arrays.length;i++)
{
    const val=arrays[i];
    const href = await newtab.evaluate(e => e.href, val); 
    console.log(href);
    const newPage = await browserInst.newPage();
  await newPage.goto(href,{delay:100});
//   kaam




 await waitandClick(".message-anywhere-button.pvs-profile-actions__action.artdeco-button",newPage);
    await waitandClick(".msg-form__msg-content-container--scrollable.scrollable.relative",newPage);
    // await newtab.click(".msg-form__send-button.artdeco-button.artdeco-button--1");    
    await waitandClick("button[data-control-name='overlay.close_conversation_window']",newPage);




// 
  await newPage.close();
  console.log(`new page=${i}`);

    // await Promise.all([
    //     val.click(), 
    //     newtab.waitForNavigation({waitUntil: 'networkidle0'}), 
    // ]);
    // await page.screenshot({path: `${abc}/aabc.png`});
    // // console.log(arrays[i].length);
    // await newtab.goBack({waitUntil: 'networkidle0'});
   
}

  
    // await waitandClick(val,newtab);

    // await waitandClick(".message-anywhere-button.pvs-profile-actions__action.artdeco-button",newtab);
    // await waitandClick(".msg-form__msg-content-container--scrollable.scrollable.relative",newtab);
    // // await newtab.click(".msg-form__send-button.artdeco-button.artdeco-button--1");    
    // await waitandClick("button[data-control-name='overlay.close_conversation_window']",newtab);

    // await newtab.goBack();

    

    
   


    } catch (error) {
        console.log(error);
          }
        })()
        

        
async function waitandClick(selector,cpage)
{
    await cpage.waitForSelector(selector)

    let selectorClicked = cpage.click(selector,{delay:100});
    return selectorClicked;
}