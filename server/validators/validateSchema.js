"use strict";
const Joi = require('joi')

module.exports = (data, schema) => { return Joi.validate(data, schema) }
