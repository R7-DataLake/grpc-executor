
const getConnection = async () => {
  return require('knex')({
    client: 'pg',
    connection: {
      host: process.env.R7_EXEC_DB_HOST || 'localhost',
      user: process.env.R7_EXEC_DB_USER || 'postgres',
      port: Number(process.env.R7_EXEC_DB_PORT) || 5432,
      password: process.env.R7_EXEC_DB_PASSWORD || '',
      database: process.env.R7_EXEC_DB_NAME || 'test',
    },
    searchPath: [process.env.R7_EXEC_DB_SCHEMA || 'public'],
    pool: {
      min: 10,
      max: 500,
    },
    debug: process.env.R7_EXEC_DB_DEBUG === "Y" ? true : false,
  });
}

module.exports = { getConnection }