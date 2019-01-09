const {add, subtract} = require('./math_utils');
const axios = require('axios');

console.log(add(1, 2));

axios({
  url: 'http://bitmaker.co',
  method: 'get'
}).then((data) =>{
  console.log(data);
});