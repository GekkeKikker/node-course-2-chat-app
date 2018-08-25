// jan 1st 1970 00:00:00 am
var moment = require('moment');

// var date = new Date();
// months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(123, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));


// 10:35 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
