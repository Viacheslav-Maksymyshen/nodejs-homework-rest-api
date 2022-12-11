const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers");
const { addSchema } = require("../../schemas");

const putUpdateContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing fields");
    }
    const { contactId } = req.params;
    const result = await Contact.updateContactById(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = putUpdateContact;
