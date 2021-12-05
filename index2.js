// index2.js

// const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocaiton, nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require(`./index`);

// fetchMyIP()
// .then(fetchCoordsByIp)
// .then(fetchISSFlyOverTimes)
// .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It DIDN'T work!: ", error.message);
  });