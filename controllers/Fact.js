'use strict';

var utils = require('../utils/writer.js');
var Fact = require('../service/FactService');

module.exports.getFactBy = function getFactBy (req, res, next, contractIdref, factIdref) {
  Fact.getFactBy(contractIdref, factIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFacts = function getFacts (req, res, next, contractIdref) {
  Fact.getFacts(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
