const express = require("express");
const { wrapper, validator } = require("../../middleWare");
const {
  getAll,
  getById,
  add,
  removeById,
  updateById,
  // updateFavorite,
} = require("../../controlers");
const {
  joi,
  // favoriteJoi
} = require("../../service");

const router = express.Router();

router.get("/", wrapper(getAll));
router.get("/:id", wrapper(getById));
router.post("/", validator(joi), wrapper(add));
router.delete("/:id", wrapper(removeById));
router.put("/:id", validator(joi), wrapper(updateById));
// router.patch(
//   "/:id/favorite",
//   validator(favoriteJoi),
//   wrapper(updateFavorite)
// );

module.exports = router;
