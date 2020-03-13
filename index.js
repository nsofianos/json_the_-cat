const fetchBreedDescription = require('./breedFetcher');
const userInput = process.argv.slice(2);

fetchBreedDescription(userInput, (error, desc) => {
  if (error) {
    console.log("error: ", error);
    process.exit();
  }
  console.log(desc);
});

