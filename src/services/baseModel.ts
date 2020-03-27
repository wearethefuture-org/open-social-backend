import { Model } from '../db/models/index'
import { aliases } from '../db/models/aliases'

export class BaseModelService {
  model: any;
  aliases: any;
  // transaction: any;

  constructor() {
    this.model = Model;
    this.aliases = aliases;
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

