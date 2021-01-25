'use strict';

var utils = require('../utils/writer.js');
var Deontic = require('../service/DeonticService');

module.exports.getDeonticBy = function getDeonticBy (req, res, next, contractIdref, deonticIdref) {
  Deontic.getDeonticBy(contractIdref, deonticIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeonticStructuredBlock = function getDeonticStructuredBlock (req, res, next, contractIdref, deonticStructuredBlockIdref) {
  Deontic.getDeonticStructuredBlock(contractIdref, deonticStructuredBlockIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeontics = function getDeontics (req, res, next, contractIdref) {
  Deontic.getDeontics(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOperativePart = function getOperativePart (req, res, next, contractIdref) {
  Deontic.getOperativePart(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrePostCondition = function getPrePostCondition (req, res, next, contractIdref, deonticIdref, conditionIdref) {
  Deontic.getPrePostCondition(contractIdref, deonticIdref, conditionIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrePostConditions = function getPrePostConditions (req, res, next, contractIdref, deonticIdref) {
  Deontic.getPrePostConditions(contractIdref, deonticIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
