const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'postgres',
  port: 5432
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.post('/signup', (request, response) => {
  const { username, password, email } = request.body;

  const query = `INSERT INTO "Larisa"."user" (id_user, username, password, "e-mail", goal_status, level) VALUES (8, $1, $2, $3, $4, 'basic')`;
  const values = [username, password, email, null];

  pool.query(query, values)
    .then(() => {
      response.json({ success: true });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      response.json({ success: false, error: error.message });
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});



// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' })
// })

// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })


// // const { Pool } = require('pg');

// // const pool = new Pool({
// //   DB_NAME: 'postgres',
// //   DB_USER: 'postgres',
// //   DB_PASS: 'postgres',
// //   DB_HOST: 'localhost',
// //   DB_PORT: 5432
// // });

// // async function signIn(username, password, email) {

// //   const query =
// //     `INSERT INTO "Larisa"."user"(
// //   id_user, username, password, e-mail, goal_status, level) VALUES (8, '${username}', '${password}', '${email}', ?, basic)
// //     `;


// //   pool.connect()

// //   const resultado = await pool.query(query)
// //   const data = resultado.rows
// //   pool.end()



// //   return data
// // }



// // export { signIn };

// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   password: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   port: 5432
// });

// export default function signIn(username, password, email) {
//   const query = 'INSERT INTO "Larisa"."user" (id_user, username, password, "e-mail", goal_status, level) VALUES ($1, $2, $3, $4, $5, $6)';

//   const values = [8, username, password, email, null, 'basic'];

//   pool.query(query, values)
//     .then(() => {
//       console.log('Data inserted successfully');
//     })
//     .catch((error) => {
//       console.error('Error inserting data:', error);
//     });
// }
