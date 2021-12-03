const request = require('request'); // Put this at the top
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const fetchMyIP = (callback) => {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      return callback(error, `${null} AN ERROR HAS OCCURED!`); // Print null if one occurred
    }
    if (response.statusCode !== 200) {   // if non-200 status, assume server error
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null); // CREATES A NEW ERROR OBJECT THAT WE CAN PASS AROUND
    }
    const json = JSON.parse(body); // ADDED to make string into OBJECT! // good syntax
    // ip NOT data!!!
    return callback(null, json.ip);
    // console.log(data); // COMMENT THIS OUT
    // if we get here, all's well and we got the data
  });
};

const fetchCoordsByIp = (ip, callback) => {
  request(`http://ip-api.com/json/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, `${null} AN ERROR HAS OCCURED!`); // Print null if one occurred
    }
    if (response.statusCode !== 200) {   // if non-200 status, assume server error
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null); // CREATES A NEW ERROR OBJECT THAT WE CAN PASS AROUND
    }
    const json = JSON.parse(body);
    // console.log(json.lat, json.lon);
    const coordinates = {
      lat: json.lat,
      lon: json.lon
    };
    return callback(null, coordinates);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIp };