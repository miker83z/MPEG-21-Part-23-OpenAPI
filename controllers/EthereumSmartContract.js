'use strict';

var utils = require('../utils/writer.js');
var EthereumSmartContract = require('../service/EthereumSmartContractService');

module.exports.generateSmartContract = function generateSmartContract(
  req,
  res,
  next,
  contractIdref
) {
  EthereumSmartContract.generateSmartContract(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      const code = response.code === undefined ? 400 : response.code;
      delete response.code;
      utils.writeJson(res, response, code);
    });
};

module.exports.parseSmartContract = function parseSmartContract(
  req,
  res,
  next,
  body
) {
  EthereumSmartContract.parseSmartContract(body)
    .then(function (response) {
      console.log(response);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      const code = response.code === undefined ? 400 : response.code;
      delete response.code;
      utils.writeJson(res, response, code);
    });
};
