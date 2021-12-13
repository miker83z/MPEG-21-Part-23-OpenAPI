'use strict';
const {
  generateSmartContractSpecification,
  OffChainStorage,
  EthereumParser,
} = require('scm-manager-generator');
var MediaContractualObjectsContract = require('./MediaContractualObjectsContractService');
const sec = require('../.secret.json');

/**
 * Generates a Smart Contract for Media from a set of Media Contractual Objects
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns scmIdref
 **/
exports.generateSmartContract = function (contractIdref) {
  return new Promise(function (resolve, reject) {
    MediaContractualObjectsContract.getContract(contractIdref)
      .then(function (contract) {
        try {
          const res = generateSmartContractSpecification(contract);
          resolve(res);
        } catch (error) {
          console.log(error);
          reject({ errorType: error.name, code: 500 });
        }
      })
      .catch(function (response) {
        reject(response);
      });
  });
};

/**
 * Parses a Smart Contract for Media from an Ethereum address and creates a set of Media Contractual Objects
 *
 * body String  (optional)
 * returns contractIdref
 **/
exports.parseSmartContract = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      const ipfs = new OffChainStorage();
      const pars = new EthereumParser(
        `https://ropsten.infura.io/v3/${sec.infura}`,
        ipfs,
        body,
        3
      );
      const res = await pars.parseSmartContract();
      resolve(res);
    } catch (error) {
      console.log(error);
      reject({ errorType: error.name, code: 500 });
    }
  });
};
