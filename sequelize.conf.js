/**
 * Loading env variables
 */
require('./src/services/env')(`${__dirname}/../`);
console.log(process.env.POSTGRES_PASSWORD,process.env.POSTGRES_USERNAME,process.env.DATABASE_NAME,process.env.POSTGRES_HOST)
module.exports = {
  // development: {
    username:"postgres",
    password :"12321",
    database: "test",
    host: "127.0.0.1",
    dialect: 'postgres',
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: true
    },
    migrationStorageTableName: 'sequelize_meta',
    migrationStorageTableSchema: 'sequelize_schema',
    logging: true
  // }
};

