"use strict";

module.exports = async function (request, h) {
  const Boom = require('hapi');
  const jwtDecoder = require('jwt-js').decodeToken
  const pool = request.mysql.pool
  try {
    const [rows, fields] = await pool.query('select * from card limit 10;')
    const openedRows = rows.map(row => Object.assign({}, row))
    .map(obj => Object.assign({}, obj, jwtDecoder(obj.HASH).payload))
    return h.response(openedRows).code(200)
  } catch (err) {
    console.log(err)
    throw Boom.internal('Internal Mysql Error', err)
  }
}