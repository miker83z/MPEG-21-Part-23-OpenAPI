'use strict';


/**
 * Returns all the data of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns Contract
 **/
exports.getContract = function(contractIdref) {
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

