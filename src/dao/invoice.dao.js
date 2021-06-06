const { query } = require("../repositories/main.repository");

class invoiceDao {
    static get(id) {
        const sql = `SELECT cuit, date, comment FROM invoice WHERE id = ?`;
        return query(sql, id);
    }

    static post(invoice) {
        const insertInvoiceQuery = `INSERT INTO invoice  (cuit, date, comment) values (?, ?, ?)`;
        return query(insertInvoiceQuery, invoice);
    }

    static delete(id) {
        const sql = `DELETE FROM invoice WHERE id = ?`;
        return query(sql, id);
    }

    static put(id, cuit, date, comment) {
        console.log("id--->", id);
        console.log("cuit--->", cuit);
        console.log("date--->", date);
        console.log("comment--->", comment);
        const sql = `UPDATE invoice SET cuit = ? , date = ?, comment = ? WHERE id = ?`;
        return query(sql, [cuit, date, comment, id]);
    }
}

module.exports = invoiceDao;
