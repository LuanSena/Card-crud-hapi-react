'use strict';

const Hapi = require('hapi');
const server = Hapi.server({
    port: process.env.PORT || 3001,
    host: 'localhost',
    routes: {
      cors: true
  }
});

server.route(require('./server/routes/card'));


const init = async () => {
    await server.register(
      {
        plugin: require('hapi-mysql2'),
        options: {
          settings: process.env.DB_CONN_STRING,
          decorate: true
        }
      }
    )

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
