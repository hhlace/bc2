const invoiceDao = require("../dao/invoice.dao");

class invoiceService {
    static async get(id) {
        return invoiceDao.get(id);
    }
    static async put(id, cuit, date, comment) {
        return invoiceDao.put(id, cuit, date, comment);
    }
    static async delete(id) {
        return invoiceDao.delete(id);
    }
    static async post(cuit, date, comment) {
        const invoice = [cuit, date, comment];
        return invoiceDao.post(invoice);
    }
}

module.exports = invoiceService;
