'use strict';

var utils = require('../utils/writer.js');
var MediaContractualObjectsAction = require('../service/MediaContractualObjectsActionService');

module.exports.getActionBy = function getActionBy (req, res, next, contractIdref, actionIdref) {
  MediaContractualObjectsAction.getActionBy(contractIdref, actionIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActions = function getActions (req, res, next, contractIdref) {
  MediaContractualObjectsAction.getActions(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setActions = function setActions (req, res, next, body, contractIdref) {
  MediaContractualObjectsAction.setActions(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
