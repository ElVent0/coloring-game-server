const { model, Schema } = require("mongoose");
const Joi = require("joi");

// Змінити схему schema

const schema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

// Змінити назви колекції + в множині ??? wtf ??? (Не забудь погуглити)

const TemplateObject = model("tables", schema, "table");

// Змінити схему joi

const joi = Joi.object({
  id: Joi.number().required(),
  color: Joi.string().required(),
});

// const favoriteJoi = Joi.object({
//   favorite: Joi.bool().required(),
// });

module.exports = {
  TemplateObject,
  joi,
  // favoriteJoi
};
