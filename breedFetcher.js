const request = require('request');

const fetchBreedDescription = (breedName, cb) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (error) {
      cb(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) cb("no breed found");
    
    let desc = data[0].description;
    cb(null, desc);
  });
};

module.exports = fetchBreedDescription;
