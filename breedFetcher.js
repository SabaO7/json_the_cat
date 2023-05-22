const request = require('request');

const breedName = process.argv[2];

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      const breed = data[0];
      console.log(breed.description);
    } else {
      console.log('Breed not found!');
    }
  }
});
