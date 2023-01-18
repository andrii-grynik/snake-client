const net = require('net');
const {IP, PORT, NAME} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', (connect) => {
    console.log('Server alive >>');
  });

  conn.on('connect', () => {
    conn.write(`Name: ${NAME}`);
  });

  conn.on('data', (data) => {
    console.log('You are done wasting my time!!!');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };
