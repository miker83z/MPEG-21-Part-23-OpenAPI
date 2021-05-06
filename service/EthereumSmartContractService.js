'use strict';


/**
 * Deploys a generated Smart Contract for Media
 *
 * scmIdref scmIdref Alphanumeric ID of the smart contract for media
 * returns String
 **/
exports.deploySmartContract = function(scmIdref) {
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
 * Generates a Smart Contract for Media from a set of Media Contractual Objects
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns scmIdref
 **/
exports.generateSmartContract = function(contractIdref) {
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
 * Parses a Smart Contract for Media from an Ethereum address and creates a set of Media Contractual Objects
 *
 * body String  (optional)
 * returns contractIdref
 **/
exports.parseSmartContract = function(body) {
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

