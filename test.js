const request = require('request');
const cheerio = require('cheerio');

request(`http://amazon.com/dp/B079H6RLKQ`, (error,response,html) =>{
    if (!error && response.statusCode ==200) {
        const $ = cheerio.load(html);
        const productTitle = $("#productTitle").text().replace(/\s\s+/g, '');
        const price = $("#priceblock_ourprice").text();
        const rating = $('#centerCol #acrPopover').text().replace(/\s\s+/g, '');
        const numReviews = $('#centerCol #acrCustomerReviewText').text().replace(/\s\s+/g, '');
        const prodImg = $('#landingImage').attr('data-old-hires');

        console.log(productTitle);
        console.log(price);
        console.log(rating);
        console.log(numReviews);
        console.log(prodImg)
    } else {
        console.log(error);
    }
})

/* <img alt="Samsung Galaxy S9 G960U 64GB Unlocked 4G LTE Phone w/ 12MP Camera - Midnight Black" src="https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX679_.jpg" data-old-hires="https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SL1500_.jpg" class="a-dynamic-image  a-stretch-horizontal" id="landingImage" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX522_.jpg&quot;:[564,522],&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX342_.jpg&quot;:[369,342],&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX679_.jpg&quot;:[733,679],&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX425_.jpg&quot;:[459,425],&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX466_.jpg&quot;:[503,466],&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX569_.jpg&quot;:[615,569],&quot;https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._SX385_.jpg&quot;:[416,385]}" style="max-width: 647.872px; max-height: 700px;"> */
