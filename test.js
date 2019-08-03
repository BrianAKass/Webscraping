const rp = require('request-promise');
const cherio = require('cheerio');
const Table = require('cli-table');

let users = [];

const options = {
    url:'https://www.freecodecamp.org/forum/directory_items?period=weekly&order=likes_received',
    json: true
}

rp(options)
    .then((data)=>{
        let userdata = [];
        for (let user of data.directory_items){
            userData.push({name: user.user.username, likes_received:user.likes_received});
        }
        process.stdout.write('loading')
        getChallengesCompletedAndPushToUserArray(UserData);
    })
    .catch((err) => {
        console.log(err);
    });

function getChallengesCompletedAndPushToUserArray(userData) {
    let i = 0;
    function next() {
        if (i < userData.length){
            var optiions  = {
                url: `https://www.freecodecamp.org/`+userData[i].name,
                transform: body => cheerio.load(body)
            }
            rp(options)
                .then(function ($){
                    process.stdout.write('.');
                    const fccAccount = $('h1.landing').length == 0; //checks to see if link works boolean
                    //counts rows on webpage to see how many challenges user passes.
                    const challengesPassed = fccAccount? $(`tbody tr`).length : 'unknown';
                })
        }
    }
}