'use strict';


/**
 * Generates a CEL contract from a set of Media Contractual Objects
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns String
 **/
exports.generateCELContract = function(contractIdref) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Generates a MCO contract from a set of Media Contractual Objects
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns String
 **/
exports.generateMCOContract = function(contractIdref) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

