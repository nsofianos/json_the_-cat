const request = require('request');

const input = process.argv.slice(2);

request(`https:/blah/api.thecatapi.com/v1/breeds/search?q=${input}`, function (error, response, body) {
  if (error) {
    return console.log(error.toString()); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
  if (data[0]) console.log('body:', data[0].description); // Print the HTML for the Google homepage.
  else console.log('breed not found');
});

