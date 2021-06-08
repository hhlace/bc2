const express = require("express");
const acl = require("express-acl");
const invoiceController = require("./controllers/invoice.controller");
const userController = require("./controllers/user.controller");
const authController = require("./controllers/authController");
const router = express.Router();
const middleware = require("./middleware/auth.middleware");
const version = "v1";

/* Authorization */
acl.config({
    baseUrl: version,
    path: "src",
});

/* LOGIN */
router.post(`/${version}/login`, authController.login);

/* User */

router.post(
    `/${version}/users`,
    middleware.validateAuthentication,
    acl.authorize,
    userController.signUp
);
router.put(`/${version}/users/:id`, userController.update);
router.delete(`/${version}/users/:id`, userController.delete);
router.get(`/${version}/users/:id`, userController.get);

/* Invoice */

router.get(`/${version}/invoice/:id`, invoiceController.get);
router.post(`/${version}/invoice`, invoiceController.post);
router.put(`/${version}/invoice/:id`, invoiceController.put);
router.delete(`/${version}/invoice/:id`, invoiceController.delete);

module.exports = { router, version };
