'use strict';

var utils = require('../utils/writer.js');
var MediaContractualObjectsFact = require('../service/MediaContractualObjectsFactService');

module.exports.getFactBy = function getFactBy (req, res, next, contractIdref, factIdref) {
  MediaContractualObjectsFact.getFactBy(contractIdref, factIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFacts = function getFacts (req, res, next, contractIdref) {
  MediaContractualObjectsFact.getFacts(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setFacts = function setFacts (req, res, next, body, contractIdref) {
  MediaContractualObjectsFact.setFacts(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
