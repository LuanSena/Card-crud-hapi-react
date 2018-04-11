"use strict";

module.exports = async function (request, h) {
  const Boom = require('hapi');	
  const pool = request.mysql.pool    
  try {
    const [rows, fields] = await pool.query(`delete from card where id=${request.params.cardId};`)
    return h.response(rows).code(204)
  } catch (err) {
    throw Boom.internal('Internal Mysql Error', err)
  }
}