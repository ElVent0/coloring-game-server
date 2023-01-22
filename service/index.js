const { model, Schema } = require("mongoose");
const Joi = require("joi");

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const TemplateObject = model("tables", schema, "table");

const joi = Joi.object({
  id: Joi.string().required(),
  color: Joi.string().required(),
});

module.exports = {
  TemplateObject,
  joi,
};
