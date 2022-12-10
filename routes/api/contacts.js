const express = require("express");
const controllers = require("../../controllers/contactsControllers");
const router = express.Router();

router.get("/", controllers.getListContacts);

router.get("/:contactId", controllers.getContacts);

router.post("/", controllers.postAddContact);

router.delete("/:contactId", controllers.deleteContact);

router.put("/:contactId", controllers.putUpdateContact);

module.exports = router;
