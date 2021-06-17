const request = require('request');
const state = require('../Robots/state.js');

const options = {
  method: 'GET',
  url: 'https://www.abibliadigital.com.br/api/books'
};


async function robotBooksBible(){
  await request(options, function (error, response, content) {
    if (error) throw new Error(error);
    state.save(content,"books");
  });
}

robotBooksBible();