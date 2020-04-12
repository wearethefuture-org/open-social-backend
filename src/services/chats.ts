import { BaseModelService } from './baseModel';

export class ChatsService extends BaseModelService {
  async getChats(): Promise<void> {
    return this.model.chats.findAll({});
  }
}
