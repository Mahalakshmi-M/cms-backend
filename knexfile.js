module.exports = {
  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      filename: '../config/db.json',
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      },
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: '../config/db.json',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}
