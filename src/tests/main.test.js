/* Users */
const createUsers = require("./suites/users/create-users.integration");
const updateUsers = require("./suites/users/update-users.integration");
const deleteUsers = require("./suites/users/delete-users.integration");
const getUser = require("./suites/users/get-users.integration");
const app = require("../../app");

describe("Main", () => {
    afterAll(async () => {
        //await app.mainDBRepository.disconnect();
    });

    /* Users */
    createUsers();
    updateUsers();
    deleteUsers();
    getUser();
});
