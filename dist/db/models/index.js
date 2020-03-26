"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// const fs = require('fs');
const path = require("path");
// const path = require('path');
const sequelize_1 = require("sequelize");
// const Sequelize = require('sequelize');
const aliases_1 = require("./aliases");
// const aliases = require('./aliases');
const relations_1 = require("./relations");
// const relations = require('./relations');
// const {
//   databaseName,
//   username,
//   password,
//   host
// } = require('../../utils/config');
const data = {
    databaseName: 'test',
    username: 'postgres',
    password: '12321',
    host: '127.0.0.1'
};
const basename = path.basename(__filename);
const db = {
    aliases: aliases_1.aliases
};
exports.Model = db;
const sequelize = new sequelize_1.Sequelize("test", "postgres", "12321", {
    host: "127.0.0.1",
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
fs.readdirSync(`${__dirname}/sources`)
    .filter(file => {
    return (file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js');
})
    .forEach(file => {
    const model = sequelize.import(path.join(__dirname, 'sources', file));
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
relations_1.relations(db);
//# sourceMappingURL=index.js.map