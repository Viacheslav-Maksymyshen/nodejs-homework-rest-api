const express = require("express");

const ctrl = require("../../controllers/contactsControllers");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getListContacts);

router.get("/:contactId", ctrl.getContacts);

router.post("/", ctrl.postAddContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.putUpdateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(schemas.addSchema),
  ctrl.patchUpdateStatusContact
);

module.exports = router;
