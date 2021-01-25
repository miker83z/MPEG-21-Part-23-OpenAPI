'use strict';

var utils = require('../utils/writer.js');
var Object = require('../service/ObjectService');

module.exports.getObject = function getObject (req, res, next, contractIdref) {
  Object.getObject(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getObjectBy = function getObjectBy (req, res, next, contractIdref, objectIdref) {
  Object.getObjectBy(contractIdref, objectIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
