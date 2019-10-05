const scrape = require('website-scraper');

let options = {
    urls: ['https://certy.px-lab.com/designer/'],
    directory: './portfolio mine',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});