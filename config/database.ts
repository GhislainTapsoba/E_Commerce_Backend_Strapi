import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'), // si utilisée
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ecms_db'),
        user: env('DATABASE_USERNAME', 'ecms_user'),
        password: env('DATABASE_PASSWORD', 'Root1234!'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY'),
          cert: env('DATABASE_SSL_CERT'),
          ca: env('DATABASE_SSL_CA'),
          capath: env('DATABASE_SSL_CAPATH'),
          cipher: env('DATABASE_SSL_CIPHER'),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
