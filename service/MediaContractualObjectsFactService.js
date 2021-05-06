'use strict';


/**
 * Returns all the data of a fact object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * factIdref factIdref Alphanumeric ID of the fact to get
 * returns inline_response_200_5
 **/
exports.getFactBy = function(contractIdref,factIdref) {
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
 * Returns the ids of facts of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getFacts = function(contractIdref) {
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
 * Create a fact of a contract object
 *
 * body  a fact object (optional)
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * no response value expected for this operation
 **/
exports.setFacts = function(body,contractIdref) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

