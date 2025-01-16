const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const databaseUrl = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: databaseUrl.host,
        port: databaseUrl.port,
        database: databaseUrl.database,
        user: databaseUrl.user,
        password: databaseUrl.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: {
        min: 0,
        max: 5,
      },
    },
  };
};
