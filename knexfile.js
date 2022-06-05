module.exports = {
  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      host: 'localhost',
      database: 'cms',
      user: 'postgres',
      password: 'root',
      port: '5432',
    }, 
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'KnexMigrations',
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
