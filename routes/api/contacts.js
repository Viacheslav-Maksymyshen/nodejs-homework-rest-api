const express = require("express");

const ctrl = require("../../controllers/contactsControllers");
const { validateBody } = require("../../middlewares");
const { schemasContact } = require("../../models");

const router = express.Router();

router.get("/", ctrl.getListContacts);

router.get("/:contactId", ctrl.getContacts);

router.post("/", ctrl.postAddContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.putUpdateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(schemasContact.updateFavoriteSchema),
  ctrl.patchUpdateStatusContact
);

module.exports = router;
