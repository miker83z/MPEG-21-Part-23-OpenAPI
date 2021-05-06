'use strict';

const parser = require('mco-parser');

/**
 * Parses a CEL contract and creates a set of Media Contractual Objects
 *
 * body String  (optional)
 * returns contractIdref
 **/
exports.getContractFromCEL = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = '';
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Parses a MCO contract and creates a set of Media Contractual Objects
 *
 * body String  (optional)
 * returns contractIdref
 **/
exports.getContractFromMCO = function (body) {
  return new Promise(function (resolve, reject) {
    try {
      const res = parser.getContractFromMCO(body);
      console.log(res);
      resolve(res);
    } catch (error) {
      console.log(error);
      reject();
    }
  });
};
