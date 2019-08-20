const axios = require('axios');
const cheerio = require('cheerio');
link = 'https://www.amazon.com/All-new-Kindle-now-with-a-built-in-front-light/dp/B07DLPWYB7'



axios.get(`${link}`)
  .then((res)=> {
    const html = res.data;
    const $ = cheerio.load(html);

    const productTitle = $("#productTitle").html().replace(/\s\s+/g, '');
    const price = $("#priceblock_ourprice").text();
    const rating = $('#centerCol #acrPopover').text().replace(/\s\s+/g, '');
    const numReviews = $('#centerCol #acrCustomerReviewText').text().replace(/\s\s+/g, '');
    const prodImg = $('#landingImage').attr('data-old-hires');
    console.log(productTitle);
    console.log(price);
    console.log(rating);
    console.log(numReviews);
    console.log(prodImg)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

        // const $ = cheerio.load(html);
        // const productTitle = $("#productTitle").html()
        // const price = $("#priceblock_ourprice").text();
        // const rating = $('#centerCol #acrPopover').text().replace(/\s\s+/g, '');
        // const numReviews = $('#centerCol #acrCustomerReviewText').text().replace(/\s\s+/g, '');
        // const prodImg = $('#landingImage').attr('data-old-hires');

        // console.log(productTitle);
        // console.log(price);
        // console.log(rating);
        // console.log(numReviews);
        // console.log(prodImg)
