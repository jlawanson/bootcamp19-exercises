/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const googleMapsClient = require('./google_api.js');

const place = process.argv[2];

console.log(googleMapsClient);

googleMapsClient.geocode({name: process.argv[2], type: 'textQuery'}).asPromise().then(response) => {
    console.log(response);
}
// (place) => {
    // fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=$(apiKey)&input=$(place)&inputtype=textquery`).then(response => {
        // console.log(response)
        // console.log(response.headers.get('candidates'))
        // console.log(response.headers.get('error_message'))
        // console.log(response.headers.get('status'))
    // })
// }

console.log(`$(place) is located at coordinates $(RETURNED_COORDINATES), at the address $(RETURNED_ADDRESS).`);