require('dotenv').config();
const client = require('.');

client.cluster.health({}, (err, resp, status) => {
  console.log('-- Client Health --', resp);
});
