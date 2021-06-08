const userDao = require("../dao/user.dao");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "secretKey";

class authService {
    static async login(email, password) {
        const result = await userDao.exists(email, "email");
        const exists = result[0].exists;

        if (exists === 0)
            throw {
                status: 401,
                error: "invalid_login",
                msg: "No es posible realizar el login",
            };

        //TODO: Validar que la pass sea correcta ----> dao
        if (password !== "helloworld") {
            console.log("password equivocada");
            throw {
                status: 401,
                error: "invalid_login",
                msg: "No es posible realizar el login",
            };
        }

        console.log("Username y password validos");

        //JWT
        const payload = {
            check: true,
            role: "admin",
        };

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60 });
        console.log("token: ", token);

        return { msg: "Login exitoso", token: token };
    }
}

module.exports = authService;
