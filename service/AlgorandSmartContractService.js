'use strict';
const {
  generateMediaSmartContract,
  OffChainStorage,
  AlgorandDeployer,
  AlgorandParser,
} = require('scm-manager-generator');
var MediaContractualObjectsContract = require('./MediaContractualObjectsContractService');
const bindings = require('../bindings-algo.json');

/**
 * Deploys a Smart Contract for Media from a set of Media Contractual Objects in Algorand
 *
 * contractIdref contractIdref Alphanumeric ID of the contract to get
 * returns AlgorandSMartContractAddress
 **/
exports.deploySmartContractAlgo = function (contractIdref) {
  return new Promise(async function (resolve, reject) {
    try {
      const contract = await MediaContractualObjectsContract.getContract(
        contractIdref
      );
      const specification = generateMediaSmartContract(contract);

      const master = AlgoDeployer.fromMnemonic(
        'enforce drive foster uniform cradle tired win arrow wasp melt cattle chronic sport dinosaur announce shell correct shed amused dismiss mother jazz task above hospital'
      );
      const john = AlgoDeployer.fromMnemonic(
        'found empower message suit siege arrive dad reform museum cake evoke broom comfort fluid flower wheat gasp baby auction tuna sick case camera about flip'
      );
      const elon = AlgoDeployer.fromMnemonic(
        'resist derive table space jealous person pink ankle hint venture manual spawn move harbor flip cigar copy throw swap night series hybrid chest absent art'
      );
      const alice = AlgoDeployer.fromMnemonic(
        'brand globe reason guess allow wear roof leisure season coin own pen duck worth virus silk jazz pitch behave jazz leisure pave unveil absorb kick'
      );
      const bob = AlgoDeployer.fromMnemonic(
        'caution fuel omit buzz six unique method kiwi twist afraid monitor song leader mask bachelor siege what shiver fringe else mass hero deposit absorb tooth'
      );
      const ipfs = new OffChainStorage();
      const provider = {
        apiToken:
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        baseServer: 'http://localhost',
        port: '4001',
      };
      const deployer = new AlgoDeployer(
        provider,
        ipfs,
        specification,
        bindings
      );
      await deployer.setMainAddress(master);
      //await setupAlgo(deployer);
      const [appId, nftAppId] = await deployer.deploySmartContracts([
        master,
        john,
        elon,
        alice,
        bob,
      ]);

      resolve({ appId, nftAppId });
    } catch (error) {
      console.log(error);
      reject({ errorType: error.name, code: 500 });
    }
  });
};

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
