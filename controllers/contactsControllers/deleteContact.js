const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
