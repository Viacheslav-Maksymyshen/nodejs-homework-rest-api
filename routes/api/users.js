const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/usersControllers");
const { validateBody } = require("../../middlewares");
const { schemasUsers } = require("../../models");

router.post(
  "/register",
  validateBody(schemasUsers.joiRegisterSchema),
  ctrl.register
);

module.exports = router;
