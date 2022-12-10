const contacts = require("../../models/contacts");

const getListContacts = async (req, res, next) => {
  try {
    const result = await contacts.listContacts();

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getListContacts;
