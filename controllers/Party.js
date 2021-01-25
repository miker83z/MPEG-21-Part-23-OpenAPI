'use strict';

var utils = require('../utils/writer.js');
var Party = require('../service/PartyService');

module.exports.getOtherPersonUsers = function getOtherPersonUsers (req, res, next, contractIdref) {
  Party.getOtherPersonUsers(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOtherPersonUsersBy = function getOtherPersonUsersBy (req, res, next, contractIdref, personUserIdref) {
  Party.getOtherPersonUsersBy(contractIdref, personUserIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getParties = function getParties (req, res, next, contractIdref) {
  Party.getParties(contractIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPartyBy = function getPartyBy (req, res, next, contractIdref, partyIdref) {
  Party.getPartyBy(contractIdref, partyIdref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
