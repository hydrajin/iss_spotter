const { fetchMyIP } = require('./iss');

// Modified breedFetcher.js
fetchMyIP((error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});