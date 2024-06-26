'use strict';
const Str = require('@supercharge/strings');

const contracts = {};

/**
 * Returns all the data of a contract object
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns Contract
 **/
exports.getContract = function (contractIdref) {
  return new Promise(function (resolve, reject) {
    if (contracts[contractIdref] !== undefined) {
      const res = JSON.parse(JSON.stringify(contracts[contractIdref]));
      resolve(res);
    } else {
      reject({ errorType: 'Id not found' });
    }
  });
};

/**
 * Creates a contract object
 *
 * body Contract a contract object (optional)
 * returns contractIdref
 **/
exports.setContract = function (body) {
  return new Promise(function (resolve, reject) {
    const random = 'cont-' + Str.random(22);
    body.idRef = random;
    contracts[random] = body;
    resolve({ contractIdref: random });
  });
};
