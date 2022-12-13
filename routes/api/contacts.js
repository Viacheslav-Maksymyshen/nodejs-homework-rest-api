const express = require("express");

const ctrl = require("../../controllers/contactsControllers");

const router = express.Router();

router.get("/", ctrl.getListContacts);

router.get("/:contactId", ctrl.getContacts);

router.post("/", ctrl.postAddContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.putUpdateContact);

router.patch("/:contactId/favorite", ctrl.patchUpdateStatusContact);

module.exports = router;
