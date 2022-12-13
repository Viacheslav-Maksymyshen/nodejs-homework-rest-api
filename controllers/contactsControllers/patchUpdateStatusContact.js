const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const patchUpdateStatusContact = async (req, res, next) => {
  try {
    const { favorite } = req.body;
    if (favorite) {
      throw HttpError(400, "missing fields");
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, { favorite });
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = patchUpdateStatusContact;
