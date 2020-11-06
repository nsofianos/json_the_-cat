const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
     console.log('error: ', error);  // Print the error if one occurred
    } 
  else {
    console.log(desc);
  }
  
  

});
