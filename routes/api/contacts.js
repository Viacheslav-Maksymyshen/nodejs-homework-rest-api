const express = require("express");

const ctrl = require("../../controllers/contactsControllers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemasContact } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrl.getListContacts);

router.get("/:contactId", authenticate, ctrl.getContacts);

router.post("/", authenticate, ctrl.postAddContact);

router.delete("/:contactId", authenticate, ctrl.deleteContact);

router.put("/:contactId", authenticate, ctrl.putUpdateContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemasContact.updateFavoriteSchema),
  ctrl.patchUpdateStatusContact
);

module.exports = router;
