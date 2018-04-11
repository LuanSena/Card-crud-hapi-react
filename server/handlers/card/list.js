"use strict";

module.exports = async function (request, h) {
  const Boom = require('hapi');
  const pool = request.mysql.pool    
  try {
    const [rows, fields] = await pool.query('select * from card limit 10;')
    return h.response(rows).code(200)
  } catch (err) {
    throw Boom.internal('Internal Mysql Error', err)
  }
}