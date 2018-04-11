"use strict";
const Joi = require('joi')

module.exports = async function (request, h) {
  const Boom = require('hapi');	
  const jwt = require('jwt-js').TokenSigner
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
      return h.response(validation.error.details).code(400)
    }
    const objectHash = new jwt('ES256k','hadouken').sign(data)
    const [row, fields] = await pool.query(`select ID from card where hash="${objectHash}";`)
    if (row.length === 0){
        return h.response({message: 'Object not found'}).code(404)
    } else {
        await pool.query(`update card(hash) values("${objectHash}");`)
        const [rowid, fields] = await pool.query(`select ID from card where hash="${objectHash}";`)
        const registredObject = Object.assign({}, data, rowid[0])
        return h.response(registredObject).code(200)
    }
  } catch (err) {
  	console.log(err)
    throw Boom.internal('Internal Mysql Error', err)
  }
}