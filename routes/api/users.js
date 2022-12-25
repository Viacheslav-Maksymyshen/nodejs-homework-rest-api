const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/usersControllers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemasUsers } = require("../../models");

router.post(
  "/register",
  validateBody(schemasUsers.joiRegisterSchema),
  ctrl.register
);

router.post("/login", validateBody(schemasUsers.joiLoginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

module.exports = router;
