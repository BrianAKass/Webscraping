const request = require('request');
const cheerio = require('cheerio');

request(`http://amazon.com/dp/B002JPJ0QY`, (error,response,html) =>{
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

      




/*

const rp = require('request-promise');
const cheerio = require('cheerio');
const Table = require('cli-table');

let users = [];
let table = new Table({
    head: ['username','likes', 'challeneges'],
    colWidths: [15,5,10]
});

const options = {
    url:'https://www.freecodecamp.org/forum/directory_items?period=weekly&order=likes_received',
    json: true
}

rp(options)
    .then((data)=>{
        let userData = [];
        for (let user of data.directory_items){
            userData.push({name: user.user.username, likes_received:user.likes_received});
        }
        process.stdout.write('loading')
        getChallengesCompletedAndPushToUserArray(userData);
    })
    .catch((err) => {
        console.log(err);
    });

function getChallengesCompletedAndPushToUserArray(userData) {
    let i = 0;
    function next() {
        if (i < userData.length){
            let options  = {
                url: `https://www.freecodecamp.org/`+userData[i].name,
                transform: body => cheerio.load(body)
            }
            rp(options)
                .then(function ($){
                    process.stdout.write('.');
                    const fccAccount = $('h1.landing').length == 0; //checks to see if link works boolean
                    //counts rows on webpage to see how many challenges user passes.
                    const challengesPassed = fccAccount? $(`tbody tr`).length : 'unknown';
                    table.push([userData[i].name, userData[i].likes_received, challengesPassed]);
                    ++i;
                    return next();
                })
        } else {
            printData();
        }
    }
    return next;
};

function printData() {
    console.log(`Check`);
    console.log(table.toString());
}
*/