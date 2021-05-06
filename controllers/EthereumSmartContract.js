'use strict';

var utils = require('../utils/writer.js');
var EthereumSmartContract = require('../service/EthereumSmartContractService');

module.exports.deploySmartContract = function deploySmartContract (req, res, next, scmIdref) {
  EthereumSmartContract.deploySmartContract(scmIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateSmartContract = function generateSmartContract (req, res, next, contractIdref) {
  EthereumSmartContract.generateSmartContract(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.parseSmartContract = function parseSmartContract (req, res, next, body) {
  EthereumSmartContract.parseSmartContract(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
