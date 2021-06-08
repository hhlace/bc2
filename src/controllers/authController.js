const authService = require("../services/auth.service");

const { generateUuid } = require("../utils/uuid.utils");

class authController {
    static async login(req, res) {
        const callId = generateUuid();

        console.log("Call %s %s id: %s", req.method, req.url, callId);

        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string") {
            console.log(
                "Call id: %s error:%s",
                callId,
                "Required parameter is missing or wrong type"
            );
            return res.status(401).send();
        }

        try {
            console.log("Call id: %s response: success", callId);
            const result = await authService.login(email, password);

            return res.status(200).send(result);
        } catch (error) {
            console.log(
                "Call id: %s error:%s",
                callId,
                error,
                JSON.stringify(error)
            );
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }
}

module.exports = authController;
