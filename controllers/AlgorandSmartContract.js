'use strict';

var utils = require('../utils/writer.js');
var AlgorandSmartContract = require('../service/AlgorandSmartContractService');

module.exports.parseSmartContractAlgo = function parseSmartContractAlgo(
  req,
  res,
  next,
  body
) {
  AlgorandSmartContract.parseSmartContractAlgo(body)
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
