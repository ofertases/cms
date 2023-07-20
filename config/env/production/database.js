module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
        host:  process.env.DATABASE_HOST,
        port: 3306,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
