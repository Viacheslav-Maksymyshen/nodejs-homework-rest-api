const { Contact } = require("../../models/contact");

const getListContacts = async (req, res, next) => {
  try {
    const result = await Contact.find();

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getListContacts;
