const express = require("express");
const invoiceController = require("./controllers/invoice.controller");
const userController = require("./controllers/user.controller");
const router = express.Router();
const version = "v1";

/* User */

router.post(`/${version}/users`, userController.signUp);
router.put(`/${version}/users/:id`, userController.update);
router.delete(`/${version}/users/:id`, userController.delete);
router.get(`/${version}/users/:id`, userController.get);

/* Invoice */

router.get(`/${version}/invoice/:id`, invoiceController.get);
router.post(`/${version}/invoice`, invoiceController.post);
router.put(`/${version}/invoice/:id`, invoiceController.put);
router.delete(`/${version}/invoice/:id`, invoiceController.delete);

module.exports = { router, version };
