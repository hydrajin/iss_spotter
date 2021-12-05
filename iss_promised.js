// iss_promised.js
const request = require('request-promise-native');

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

/*
 * Makes a request to freegeoip.app using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */

const fetchCoordsByIp = function(body) {
  const ip = JSON.parse(body).ip; // declare a variable that only parses the IP
  return request(`http://ip-api.com/json/${ip}`); // Return a request to freegeoip to get coordinates
};

/*
 * Requests data from api.open-notify.org using provided lat/long data
 * Input: JSON body containing geo data response from freegeoip.app
 * Returns: Promise of request for fly over data, returned as JSON string
 */

const fetchISSFlyOverTimes = function(body) {
  const {lat, lon} = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then((data) => { // anon function
      const { response } = JSON.parse(data);
      return response; // return and parse the data in the response object
    });
};

module.exports = { /*fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes */ nextISSTimesForMyLocation};