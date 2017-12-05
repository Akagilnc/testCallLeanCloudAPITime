const request = require('request');
async function call () {

    let begin_time = Date.now()
    console.log(begin_time)
    await request.post('https://git-dev.leanapp.cn/activity/')
    let end_time = Date.now()
    console.log(end_time)

    console.log('used ' + (end_time - begin_time) + 'ms')
}

call().then((v)=>{})