async function call () {

    const fetch = require("node-fetch");

    console.time('test');

    await fetch('https://git-dev.leanapp.cn/activity/');

    console.timeEnd('test');
}

call().then((v)=>{})