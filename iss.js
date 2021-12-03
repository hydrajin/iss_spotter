/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const request = require('request');


 const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode); // statusCode: 200 is SUCCESS!
  //  console.log(body);
    // Prints ONLY the description!
    // console.log('type of body:', typeof body); // string!
    if (error) {
      console.log(error, `${null} AN ERROR HAS OCCURED!`); // Print null if one occurred
      return;
    }
    const data = JSON.parse(body); // ADDED to make string into OBJECT!
    console.log(data);
  });
};
 

module.exports = { fetchMyIP };