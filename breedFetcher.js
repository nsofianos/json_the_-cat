const request = require('request');


const fetchBreedDescription = (input, cb) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function (error, response, body) {
    if (error) {
      return cb(error);
    } 
    const data = JSON.parse(body);
    let desc;
    if (!data[0]) error = 'breed not found';
    
    else desc = (data[0].description);

    if (error) cb(error, null);
    else cb(null, desc);


  });
}
  

module.exports = { fetchBreedDescription };
