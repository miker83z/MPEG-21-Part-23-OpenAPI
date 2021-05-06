'use strict';

var utils = require('../utils/writer.js');
var Parser = require('../service/ParserService');

module.exports.getContractFromCEL = function getContractFromCEL (req, res, next, body) {
  Parser.getContractFromCEL(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getContractFromMCO = function getContractFromMCO (req, res, next, body) {
  Parser.getContractFromMCO(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
