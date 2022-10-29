const { request, response } = require('express');
const db = require('../config/_configDB');

const getUser = (request, response) => {
    db.query("SELECT * FROM persons", (error, results) => {
        if (error) {
            throw error
        }

        response.status(200).json(results.rows)
    })
}


module.exports = getUser;