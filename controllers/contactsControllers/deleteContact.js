const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContactById(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;