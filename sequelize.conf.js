
module.exports = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: true
    },
    migrationStorageTableName: 'sequelize_meta',
    migrationStorageTableSchema: 'sequelize_schema',
    logging: true
};

