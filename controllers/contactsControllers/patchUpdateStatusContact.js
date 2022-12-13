const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const patchUpdateStatusContact = async (req, res, next) => {
  try {
    const { favorite } = req.body;
    const { contactId } = req.params;

    const result = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = patchUpdateStatusContact;
