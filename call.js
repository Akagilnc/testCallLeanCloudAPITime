var request = require('request');

begin_time = Date.now()
console.log(begin_time)
request.post('https://git-dev.leanapp.cn/activity/')
end_time = Date.now()
console.log(end_time)

console.log('used ' + (end_time - begin_time) + 'ms')