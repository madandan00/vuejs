require('./css/app.scss');

//var str = require('./js/common.js');
//console.log(str)

//import x from './js/common';
//console.log(x);
//var common=require('./js/common');
//common.getList();
//import ES6 from './js/es6';
//require('./css/app.scss');
var common=require('./js/utills/utill.common.js');
var html=require('./js/tepls/index.html');

common.render(html)