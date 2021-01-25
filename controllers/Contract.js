'use strict';

var utils = require('../utils/writer.js');
var Contract = require('../service/ContractService');

module.exports.getContract = function getContract (req, res, next, contractIdref) {
  Contract.getContract(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
