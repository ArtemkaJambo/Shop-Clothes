import pkg from 'pg'
const { Client } = pkg

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'products_db',
    password: 'postgresql',
    port: 5432
})

client.connect()
    .then(() => console.log('Connected to Postgresql'))
    .catch((err) => console.error('Connection error', err.stack))

client.query('SELECT * FROM users')
    .then((res) => console.log(res.rows))
    .catch((err) => console.error('Query Error', err.stack))

export default client