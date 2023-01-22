const { model, Schema } = require("mongoose");
const Joi = require("joi");

const schema = new Schema(
  {
    color: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const TemplateObject = model("tables", schema, "table");

const joi = Joi.object({
  color: Joi.string().required(),
});

module.exports = {
  TemplateObject,
  joi,
};
