import {Model} from '../db/models/index'
// const Model = require('../db/models');

const Aliases = require('../db/models/aliases');

export class BaseModelService {
  public model:any;
  aliases:any;



  constructor() {
    this.model = Model;
    this.aliases = Aliases;
    // this.transaction = null;
  }

  // async beginTransaction() {
  //   this.transaction = await this.model.sequelize.transaction();
  // }
  //
  // async commitTransaction() {
  //   if (this.transaction) {
  //     await this.transaction.commit();
  //   }
  //   this.transaction = null;
  // }
  //
  // async rollbackTransaction() {
  //   if (this.transaction) {
  //     await this.transaction.rollback();
  //   }
  //   this.transaction = null;
  // }
}

