'use strict';

var utils = require('../utils/writer.js');
var Action = require('../service/ActionService');

module.exports.getActionBy = function getActionBy (req, res, next, contractIdref, actionIdref) {
  Action.getActionBy(contractIdref, actionIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActions = function getActions (req, res, next, contractIdref) {
  Action.getActions(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
