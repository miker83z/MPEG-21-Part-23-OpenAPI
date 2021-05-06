'use strict';

var utils = require('../utils/writer.js');
var MediaContractualObjectsObject = require('../service/MediaContractualObjectsObjectService');

module.exports.getObject = function getObject (req, res, next, contractIdref) {
  MediaContractualObjectsObject.getObject(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getObjectBy = function getObjectBy (req, res, next, contractIdref, objectIdref) {
  MediaContractualObjectsObject.getObjectBy(contractIdref, objectIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setObject = function setObject (req, res, next, body, contractIdref) {
  MediaContractualObjectsObject.setObject(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
