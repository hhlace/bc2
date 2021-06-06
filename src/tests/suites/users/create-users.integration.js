const request = require("supertest");
const app = require("../../../../app");
const { version } = require("../../../router");

module.exports = () =>
    describe("POST create User", () => {
        it("it should fail with 400 if email is missing", (done) => {
            const body = {
                password: "123",
                firstName: "firstName",
                lastName: "lastName",
            };

            request(app)
                .post(`/${version}/users`)
                .send(body)
                .then((response) => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        });

        it("it should pass with 200", (done) => {
            const randomNumber = Math.floor(Math.random() * Math.floor(1000));
            const body = {
                email: `silviagarcia${randomNumber}@test.com`,
                password: "password",
                firstName: "Silvia",
                lastName: "Garcia",
                userName: "silviaGarcia65",
            };

            request(app)
                .post(`/${version}/users`)
                .send(body)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
        });

        it("it should response 409 if user is repeated", (done) => {
            const randomNumber = Math.floor(Math.random() * Math.floor(1000));
            const body = {
                email: `repeted@test.com`,
                password: "password",
                firstName: "Silvia",
                lastName: "Garcia",
                userName: "silviaGarcia65",
            };

            request(app)
                .post(`/${version}/users`)
                .send(body)
                .then((response) => {
                    expect(response.statusCode).toBe(409);
                    done();
                });
        });

        it("it should return 400", (done) => {
            const randomNumber = Math.floor(Math.random() * Math.floor(1000));
            const body = {
                email: `silviagarcia${randomNumber}@test.com`,
                password: "password",
                firstName: { hola: "ahh" },
                lastName: "Garcia",
                userName: "silviaGarcia65",
            };

            request(app)
                .post(`/${version}/users`)
                .send(body)
                .then((response) => {
                    expect(response.statusCode).toBe(400);
                    done();
                });
        });

        it("it should update user", (done) => {
            const randomNumber = Math.floor(Math.random() * Math.floor(1000));
            const body = {
                email: `silviagarcia${randomNumber}@test.com`,
                password: "password",
                firstName: "henry",
                lastName: "Garcia",
                userName: "silviaGarcia65",
            };
            const body2 = {
                email: `silviagarcia${randomNumber}@test.com`,
                password: "password",
                firstName: "Maria",
                lastName: "Chuzena",
                userName: "usuarioNuevo",
            };

            request(app)
                .post(`/${version}/users`)
                .send(body)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                })
                .then(() => {
                    request(app)
                        .put(`/${version}/users/${response.body.insertId}`)
                        .send(body2)
                        .then((response) => {
                            expect(response.statusCode).toBe(200);
                            done();
                        });
                });
        });

        it("it should pass with 200", (done) => {
            const randomNumber = Math.floor(Math.random() * Math.floor(1000));
            const body = {
                email: `silviagarcia${randomNumber}@test.com`,
                password: "password",
                firstName: "Silvia",
                lastName: "Garcia",
                userName: "silviaGarcia65",
            };

            request(app)
                .post(`/${version}/users`)
                .send(body)
                .then((response) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
        });
    });
