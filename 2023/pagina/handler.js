
const { Pool } = require('pg');

const pool = new Pool({
  DB_NAME: 'postgres',
  DB_USER : 'postgres',
  DB_PASS :'postgres',
  DB_HOST : 'localhost',
  DB_PORT : 5432
});



// const { Client } = require('pg');


// const connectionData = {
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'postgres',
//   port: 5432,
// }

// const client = new Client(connectionData);


// async function signIn(username, password, email){

    
//   const query = 
// `INSERT INTO "Larisa"."user"(
// id_user, username, password, e-mail, goal_status, level) VALUES (8, '${username}', '${password}', '${email}', ?, basic)
//   `;


//   client.connect()

//   const resultado= await client.query(query)
//   const data = resultado.rows
//   client.end()
   


// return data
// }

// export function signIn();