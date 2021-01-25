'use strict';


/**
 * Returns all the data of an action object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * actionIdref actionIdref Alphanumeric ID of the action to get
 * returns inline_response_200_3
 **/
exports.getActionBy = function(contractIdref,actionIdref) {
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
 * Returns the ids of actions of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getActions = function(contractIdref) {
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

