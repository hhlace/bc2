const invoiceService = require("../services/invoice.service");
const { generateUuid } = require("../utils/uuid.utils");

class invoiceController {
    static async get(req, res) {
        const { id } = req.params;

        try {
            const result = await invoiceService.get(id);
            return res.status(200).send(result);
        } catch (error) {
            console.log("Call id: %s error:%s", callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }

    static async post(req, res) {
        const callId = generateUuid();
        const { cuit, date, comment } = req.body;
        if (
            typeof cuit !== "string" ||
            typeof date !== "string" ||
            typeof comment !== "string"
        ) {
            console.log(
                "Call id: %s error:%s",
                callId,
                "Required parameter is missing or wrong type"
            );
            return res.status(400).send();
        }
        try {
            const result = await invoiceService.post(cuit, date, comment);
            return res.status(201).send(result);
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

    static async put(req, res) {
        const callId = generateUuid();
        const { cuit, date, comment } = req.body;
        const { id } = req.params;

        if (
            (cuit && typeof cuit !== "string") ||
            (date && typeof date !== "string") ||
            (comment && typeof comment !== "string")
        ) {
            console.log(
                "Call id: %s error:%s",
                callId,
                "Required parameter is missing or wrong type"
            );
            return res.status(400).send();
        }

        try {
            await invoiceService.put(id, cuit, date, comment);
            return res.status(200).send();
        } catch (error) {
            console.log("Call id: %s error:%s", callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }

    static async delete(req, res) {
        const callId = generateUuid();
        const { id } = req.params;

        try {
            await invoiceService.delete(id);
            return res.status(200).send();
        } catch (error) {
            console.log("Call id: %s error:%s", callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }
}

module.exports = invoiceController;
