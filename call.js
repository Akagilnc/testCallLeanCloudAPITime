const request = require('request');
async function call () {

    var fetch = require("node-fetch");

    console.time('test');

    await fetch('https://git-dev.leanapp.cn/activity/');

    console.timeEnd('test');
}

call().then((v)=>{})