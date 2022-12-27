const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const userSchema = new Schema({
  password: {
    type: String,
    minlength: 6,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
});

userSchema.post("save", handleMongooseError);

// Joi

const joiRegisterSchema = Joi.object({
  password: Joi.string().alphanum().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().alphanum().min(6).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "ua"] },
    })
    .required(),
});

const schemasUsers = {
  joiRegisterSchema,
  joiLoginSchema,
};

const User = model("user", userSchema);
module.exports = { User, schemasUsers };
