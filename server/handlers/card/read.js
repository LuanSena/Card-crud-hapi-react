"use strict";

module.exports = async function (request, h) {
  const Boom = require('hapi');	
  const pool = request.mysql.pool    
  try {
  	console.log(request.params.cardId)
    const [rows, fields] = await pool.query(`select * from card where ID=${request.params.cardId};`)
    return h.response(rows).code(200)
  } catch (err) {
  	console.log(err)
    throw Boom.internal('Internal Mysql Error', err)
  }
}