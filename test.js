const request = require('request');
const cheerio = require('cheerio');

request(`http://amazon.com/dp/B00YD547Q6`, (error,response,html) =>{
    if (!error && response.statusCode ==200) {
        const $ = cheerio.load(html);
        const productTitle = $("#productTitle").text().replace(/\s\s+/g, '');
        const price = $("#priceblock_ourprice").text();
        const rating = $('#centerCol #acrPopover').text().replace(/\s\s+/g, '');
        const numReviews = $('#centerCol #acrCustomerReviewText').text().replace(/\s\s+/g, '');
        console.log(productTitle);
        console.log(price);
        console.log(rating);
        console.log(numReviews);
    } else {
        console.log(error);
    }
})

