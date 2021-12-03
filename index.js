const { fetchMyIP, fetchCoordsByIp } = require('./iss');

const ipWorkedCallback = (error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned ip:', ip);
 fetchCoordsByIp(ip, coordsWorkedCallback);
};

const coordsWorkedCallback = (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned coordinates:', coordinates);
//  return coordinates;
};

// const runApp = () => {
// fetchMyIP(ipWorkedCallback);
// };

fetchMyIP(ipWorkedCallback);