const request = require('request');
const userInput = process.argv.slice(2);
request("https://api.thecatapi.com/v1/breeds/search?q=" + userInput, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) return console.log('breed not found');
  console.log(data[0].description);
});