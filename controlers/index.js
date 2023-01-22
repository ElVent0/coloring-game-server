const { TemplateObject } = require("../service");
const { Error } = require("../middleWare");

const getAll = async (req, res) => {
  const result = await TemplateObject.find({});

  res.json({
    // status: "done",
    // code: 200,
    // data: { result },
    result,
  });
};

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await TemplateObject.findById(id);

  if (!result) {
    throw new Error(404, "Not found");
  }

  res.json({
    // status: "done",
    // code: 200,
    // data: { result },
    result,
  });
};

// const add = async (req, res) => {
//   const result = await TemplateObject.create(req.body);
//   res.status(201).json({ status: "done", code: 201, data: { result } });
// };

// const removeById = async (req, res) => {
//   const { id } = req.params;
//   const result = await TemplateObject.findByIdAndRemove(id);

//   if (!result) {
//     throw new Error(404, "Not found");
//   }

//   res.json({
//     // status: "done",
//     // code: 200,
//     // data: { result },
//     result,
//   });
// };

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await TemplateObject.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw new Error(404, "Not found");
  }

  res.json({
    // status: "done",
    // code: 200,
    // data: { result },
    result,
  });
};

// const updateFavorite = async (req, res) => {
//   const { id } = req.params;
//   const { favorite } = req.body;

//   if (!favorite) {
//     throw new Error(400, `Missing field favorite`);
//   }

//   const result = await TemplateObject.findByIdAndUpdate(
//     id,
//     { favorite },
//     { new: true }
//   );

//   if (!result) {
//     throw new Error(404, "Not found");
//   }

//   res.json({
//     // status: "done",
//     // code: 200,
//     // data: { result },
//     result,
//   });
// };

module.exports = {
  getAll,
  // add,
  getById,
  // removeById,
  updateById,
  // updateFavorite,
};
