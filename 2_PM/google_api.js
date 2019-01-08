// TODO - create client object for Google API connection which can be exporteconst google

const { apiKey } = require('./config.js');

const googleMapsClient = require('@google/maps').createClient({
    key: apiKey,
    Promise: Promise
  });

  module.export = googleMapsClient;

//   console.log(process.env)