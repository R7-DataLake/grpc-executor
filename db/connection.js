
const getConnection = async () => {
  return require('knex')({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      port: Number(process.env.DB_PORT) || 5432,
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'test',

    },
    pool: {
      min: 0,
      max: 100,
    }
  });
}

module.exports = { getConnection }