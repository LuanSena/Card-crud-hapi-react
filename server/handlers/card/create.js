"use strict";
const Joi = require('joi')

module.exports = async function (request, h) {
  const Boom = require('hapi');	
  const pool = request.mysql.pool    
  try {
    var schema = Joi.object().keys(
      {
        number: Joi.string().required(),
        cvv: Joi.string().required(),
        expiration: Joi.string().required(),
        company: Joi.string().required()
      }),
      data = request.payload;

    const validation = Joi.validate(data, schema)
    if (validation.error) {
      console.log(validation.error.details)
      return h.response(validation.error.details).code(400)
    }
    console.log(data)
    // const [rows, fields] = await pool.query(`select * from card where ID=${request.params.cardId};`)
    return h.response(rows).code(200)
  } catch (err) {
  	console.log(err)
    throw Boom.internal('Internal Mysql Error', err)
  }
}