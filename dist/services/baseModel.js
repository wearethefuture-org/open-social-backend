"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../db/models/index");
// const Model = require('../db/models');
const aliases_1 = require("../db/models/aliases");
class BaseModelService {
    constructor() {
        this.model = index_1.Model;
        this.aliases = aliases_1.aliases;
        // this.transaction = null;
    }
    async beginTransaction() {
        this.transaction = await this.model.sequelize.transaction();
    }
    async commitTransaction() {
        if (this.transaction) {
            await this.transaction.commit();
        }
        this.transaction = null;
    }
    async rollbackTransaction() {
        if (this.transaction) {
            await this.transaction.rollback();
        }
        this.transaction = null;
    }
}
exports.BaseModelService = BaseModelService;
//# sourceMappingURL=baseModel.js.map