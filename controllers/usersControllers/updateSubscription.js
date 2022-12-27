const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { email } = req.user;
  const { subscription } = req.body;

  if (!req.body) {
    throw HttpError(400, "missing field subscription");
  }

  const result = await User.findOneAndUpdate({ email }, { subscription });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = updateSubscription;
