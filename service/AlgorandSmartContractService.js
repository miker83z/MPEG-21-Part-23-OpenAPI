'use strict';
const {
  generateMediaSmartContract,
  OffChainStorage,
  AlgorandParser,
} = require('scm-manager-generator');
var MediaContractualObjectsContract = require('./MediaContractualObjectsContractService');

/**
 * Parses a Smart Contract for Media from an Algorand address and app id and creates a set of Media Contractual Objects
 *
 * body String  (optional)
 * returns contractIdref
 **/
exports.parseSmartContractAlgo = function (body) {
  return new Promise(async function (resolve, reject) {
    try {
      const ipfs = new OffChainStorage();
      const provider = {
        apiToken:
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        baseServer: 'http://localhost',
        port: '4001',
      };
      const pars = new AlgoParser(
        provider,
        ipfs,
        body.address,
        body.appId,
        body.nftAppId
      );
      const res = await pars.parseSmartContract();
      resolve(res);
    } catch (error) {
      console.log(error);
      reject({ errorType: error.name, code: 500 });
    }
  });
};
