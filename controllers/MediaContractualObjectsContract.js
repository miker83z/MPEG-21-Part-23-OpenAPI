'use strict';

var utils = require('../utils/writer.js');
var MediaContractualObjectsContract = require('../service/MediaContractualObjectsContractService');

module.exports.getContract = function getContract(
  req,
  res,
  next,
  contractIdref
) {
  MediaContractualObjectsContract.getContract(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.setContract = function setContract(req, res, next, body) {
  MediaContractualObjectsContract.setContract(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};
