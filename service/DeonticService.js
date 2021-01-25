'use strict';


/**
 * Returns all the data of a deontic object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * deonticIdref deonticIdref Alphanumeric ID of the expression to get
 * returns inline_response_200_2
 **/
exports.getDeonticBy = function(contractIdref,deonticIdref) {
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
 * Returns the ids of deontics of a deontic structured block object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * deonticStructuredBlockIdref deonticStructuredBlockIdref Alphanumeric ID of the expression block to get
 * returns List
 **/
exports.getDeonticStructuredBlock = function(contractIdref,deonticStructuredBlockIdref) {
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
 * Returns the ids of deontic expressions of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getDeontics = function(contractIdref) {
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
 * Returns the ids of deontic structured blocks of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns List
 **/
exports.getOperativePart = function(contractIdref) {
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
 * Returns all the data of a cel condition object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * deonticIdref deonticIdref Alphanumeric ID of the expression to get
 * conditionIdref conditionIdref Alphanumeric ID of the condition to get
 * returns CELCondition
 **/
exports.getPrePostCondition = function(contractIdref,deonticIdref,conditionIdref) {
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
 * Returns the ids of conditions of a deontic object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * deonticIdref deonticIdref Alphanumeric ID of the expression to get
 * returns List
 **/
exports.getPrePostConditions = function(contractIdref,deonticIdref) {
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

