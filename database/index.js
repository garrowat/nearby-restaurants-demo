const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: `http://${process.env.ESHOST}:${process.env.ESPORT}`, log: 'trace' });

module.exports = client;
