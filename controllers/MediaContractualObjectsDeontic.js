'use strict';

var utils = require('../utils/writer.js');
var MediaContractualObjectsDeontic = require('../service/MediaContractualObjectsDeonticService');

module.exports.getDeonticBy = function getDeonticBy (req, res, next, contractIdref, deonticIdref) {
  MediaContractualObjectsDeontic.getDeonticBy(contractIdref, deonticIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeonticStructuredBlock = function getDeonticStructuredBlock (req, res, next, contractIdref, deonticStructuredBlockIdref) {
  MediaContractualObjectsDeontic.getDeonticStructuredBlock(contractIdref, deonticStructuredBlockIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeontics = function getDeontics (req, res, next, contractIdref) {
  MediaContractualObjectsDeontic.getDeontics(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOperativePart = function getOperativePart (req, res, next, contractIdref) {
  MediaContractualObjectsDeontic.getOperativePart(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrePostCondition = function getPrePostCondition (req, res, next, contractIdref, deonticIdref, conditionIdref) {
  MediaContractualObjectsDeontic.getPrePostCondition(contractIdref, deonticIdref, conditionIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPrePostConditions = function getPrePostConditions (req, res, next, contractIdref, deonticIdref) {
  MediaContractualObjectsDeontic.getPrePostConditions(contractIdref, deonticIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setDeontics = function setDeontics (req, res, next, body, contractIdref) {
  MediaContractualObjectsDeontic.setDeontics(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setOperativePart = function setOperativePart (req, res, next, body, contractIdref) {
  MediaContractualObjectsDeontic.setOperativePart(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setPrePostConditions = function setPrePostConditions (req, res, next, body, contractIdref, deonticIdref) {
  MediaContractualObjectsDeontic.setPrePostConditions(body, contractIdref, deonticIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
