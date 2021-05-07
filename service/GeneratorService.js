'use strict';
const generator = require('mco-generator');
var MediaContractualObjectsContract = require('./MediaContractualObjectsContractService');

/**
 * Generates a CEL contract from a set of Media Contractual Objects
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns String
 **/
exports.generateCELContract = function (contractIdref) {
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
 * Generates a MCO contract from a set of Media Contractual Objects
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns String
 **/
exports.generateMCOContract = function (contractIdref) {
  return new Promise(function (resolve, reject) {
    MediaContractualObjectsContract.getContract(contractIdref)
      .then(function (contract) {
        generator
          .getMCOFromContract(contract)
          .then(function (res) {
            resolve(res);
          })
          .catch(function (error) {
            console.log(error);
            reject({ errorType: error.name, code: 500 });
          });
      })
      .catch(function (response) {
        reject(response);
      });
  });
};
