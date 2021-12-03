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
      callback(error, `${null} AN ERROR HAS OCCURED!`); // Print null if one occurred
      
    }
    if (response.statusCode !== 200) {   // if non-200 status, assume server error
      const msg = (`Status Code ${response.statusCode} when fetching IP. Response: ${body}`, null);
      callback(Error(msg), null); // CREATES A NEW ERROR OBJECT THAT WE CAN PASS AROUND
      return;
    }
    const ip = JSON.parse(body).ip; // ADDED to make string into OBJECT! 
    // ip NOT data!!!
    callback(null, ip);
    // console.log(data); // COMMENT THIS OUT
    // if we get here, all's well and we got the data
  });
};


module.exports = { fetchMyIP };