const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const breed = data[0];
        callback(null, breed.description);
      } else {
        callback('Breed not found!', null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
