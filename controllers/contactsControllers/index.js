const postAddContact = require("./postAddContact");
const deleteContact = require("./deleteContact");
const getListContacts = require("./getListContacts");
const getContacts = require("./getContacts");
const putUpdateContact = require("./putUpdateContact");
const patchUpdateStatusContact = require("./patchUpdateStatusContact");

module.exports = {
  postAddContact,
  deleteContact,
  getListContacts,
  getContacts,
  putUpdateContact,
  patchUpdateStatusContact,
};
