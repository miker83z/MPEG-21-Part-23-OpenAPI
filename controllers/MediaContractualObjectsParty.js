'use strict';

var utils = require('../utils/writer.js');
var MediaContractualObjectsParty = require('../service/MediaContractualObjectsPartyService');

module.exports.getOtherPersonUsers = function getOtherPersonUsers (req, res, next, contractIdref) {
  MediaContractualObjectsParty.getOtherPersonUsers(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOtherPersonUsersBy = function getOtherPersonUsersBy (req, res, next, contractIdref, personUserIdref) {
  MediaContractualObjectsParty.getOtherPersonUsersBy(contractIdref, personUserIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getParties = function getParties (req, res, next, contractIdref) {
  MediaContractualObjectsParty.getParties(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPartyBy = function getPartyBy (req, res, next, contractIdref, partyIdref) {
  MediaContractualObjectsParty.getPartyBy(contractIdref, partyIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setOtherPersonUsers = function setOtherPersonUsers (req, res, next, body, contractIdref) {
  MediaContractualObjectsParty.setOtherPersonUsers(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setParties = function setParties (req, res, next, body, contractIdref) {
  MediaContractualObjectsParty.setParties(body, contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
