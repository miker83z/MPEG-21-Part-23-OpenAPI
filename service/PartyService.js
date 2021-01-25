'use strict';


/**
 * Returns the ids of otherPersonUsers of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getOtherPersonUsers = function(contractIdref) {
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
 * Returns all the data of a personUser object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * personUserIdref personUserIdref Alphanumeric ID of the personUser to get
 * returns inline_response_200_1
 **/
exports.getOtherPersonUsersBy = function(contractIdref,personUserIdref) {
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
 * Returns the ids of parties of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getParties = function(contractIdref) {
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
 * Returns all the data of a party object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * partyIdref partyIdref Alphanumeric ID of the party to get
 * returns inline_response_200
 **/
exports.getPartyBy = function(contractIdref,partyIdref) {
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

