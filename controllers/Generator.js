'use strict';

var utils = require('../utils/writer.js');
var Generator = require('../service/GeneratorService');

module.exports.generateCELContract = function generateCELContract (req, res, next, contractIdref) {
  Generator.generateCELContract(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateMCOContract = function generateMCOContract (req, res, next, contractIdref) {
  Generator.generateMCOContract(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
