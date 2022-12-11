const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers");

const getContacts = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.getContactById(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
