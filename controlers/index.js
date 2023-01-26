const { TemplateObject } = require("../service");
const { Error } = require("../middleWare");

const getAll = async (req, res) => {
  const result = await TemplateObject.find({});

  res.json({
    result,
  });
};

const getAllAuto = async (req, res) => {
  const result = await TemplateObject.find({});
  return result;
};

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await TemplateObject.findById(id);

  if (!result) {
    throw new Error(404, "Not found");
  }

  res.json({
    result,
  });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await TemplateObject.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw new Error(404, "Not found");
  }

  res.json({
    result,
  });
};

module.exports = {
  getAll,
  getById,
  updateById,
  getAllAuto,
};
