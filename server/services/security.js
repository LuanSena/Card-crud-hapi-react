"use strict";

module.encode = async function (data) {
  const jwt = require('jwt-js').TokenSigner
  return new jwt('ES256k','hadouken').sign(data)
}

module.decode = async function (token) {
    const jwtDecoder = require('jwt-js').decodeToken
    return jwtDecoder(token).payload
  }