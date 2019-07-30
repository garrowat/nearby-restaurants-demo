const db = require('./connection.js');

db.connect();



db.end()
  .then(() => console.log('client has disconnected'))
  .catch(err => console.error('error during disconnection', err.stack));

// const catQuery = 'INSERT INTO categories (name) VALUES ($1), ($2) RETURNING *';
// const values = ['italian', 'indian'];

// db.query(catQuery, values)
//   .then((res) => {
//     console.log(res.rows[0]);
//   })
//   .then(() => {
//     db
//       .end()
//       .then(() => console.log('client has disconnected'))
//       .catch(err => console.error('error during disconnection', err.stack));
//   })
//   .catch(e => console.error(e.stack));
