const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/usersControllers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { wrapper } = require("../../helpers");
const { schemasUsers } = require("../../models");

router.post(
  "/register",
  validateBody(schemasUsers.joiRegisterSchema),
  wrapper(ctrl.register)
);
router.get("/verify/:verificationToken", wrapper(ctrl.verifyEmail));

router.post("/verify", wrapper(ctrl.resendVerifyEmail));

router.post(
  "/login",
  validateBody(schemasUsers.joiLoginSchema),
  wrapper(ctrl.login)
);

router.get("/current", authenticate, wrapper(ctrl.current));

router.post("/logout", authenticate, wrapper(ctrl.logout));

router.patch("/update", authenticate, wrapper(ctrl.updateSubscription));

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  wrapper(ctrl.updateAvatar)
);

module.exports = router;
