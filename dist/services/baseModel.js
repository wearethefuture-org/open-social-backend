"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../db/models/index");
// const Model = require('../db/models');
const Aliases = require('../db/models/aliases');
class BaseModelService {
    constructor() {
        this.model = index_1.Model;
        this.aliases = Aliases;
        // this.transaction = null;
    }
}
exports.BaseModelService = BaseModelService;
//# sourceMappingURL=baseModel.js.map