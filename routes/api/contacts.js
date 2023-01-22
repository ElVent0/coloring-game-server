const express = require("express");
const { wrapper, validator } = require("../../middleWare");
const { getAll, getById, updateById } = require("../../controlers");
const { joi } = require("../../service");

const router = express.Router();

router.get("/", wrapper(getAll));
router.get("/:id", wrapper(getById));
router.put("/:id", validator(joi), wrapper(updateById));

module.exports = router;
