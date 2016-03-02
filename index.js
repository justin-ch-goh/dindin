const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');

var db = new Sqlite3.Database('./dindin.sqlite');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.bind({ db: db })

server.route(require('./routes'));

server.start(() => {

    console.log('Server listening at:', server.info.uri);
});