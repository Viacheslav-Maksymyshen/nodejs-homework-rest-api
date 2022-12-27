const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/usersControllers");
const { validateBody, authenticate } = require("../../middlewares");
const { wrapper } = require("../../helpers");
const { schemasUsers } = require("../../models");

router.post(
  "/register",
  validateBody(schemasUsers.joiRegisterSchema),
  ctrl.register
);

router.post(
  "/login",
  validateBody(schemasUsers.joiLoginSchema),
  wrapper(ctrl.login)
);

router.get("/current", authenticate, wrapper(ctrl.current));

router.post("/logout", authenticate, wrapper(ctrl.logout));

router.post("/update", authenticate, wrapper(ctrl.updateSubscription));

module.exports = router;
