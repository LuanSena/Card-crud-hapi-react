'use strict';

const Hapi = require('hapi');
const hmysql = require('hapi-plugin-mysql');
const server = Hapi.server({
    port: 3001,
    host: 'localhost'
});

server.route(require('./server/routes/card'));

const init = async () => {
    await server.register(
      {
        plugin: require('hapi-mysql2'),
        options: {
          settings: 'mysql://root:toor@localhost/upnid',
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
