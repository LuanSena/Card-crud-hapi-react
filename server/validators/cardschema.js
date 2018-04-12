"use strict";
const Joi = require('joi')

module.exports = () => {return
      Joi.object().keys(
      {
        number: Joi.string().required(),
        cvv: Joi.string().required(),
        expiration: Joi.string().required(),
        company: Joi.string().required()
      })
    }
