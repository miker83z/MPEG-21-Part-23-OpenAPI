'use strict';


/**
 * Returns the ids of objects of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getObject = function(contractIdref) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all the data of an object object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * objectIdref objectIdref Alphanumeric ID of the object to get
 * returns inline_response_200_4
 **/
exports.getObjectBy = function(contractIdref,objectIdref) {
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

