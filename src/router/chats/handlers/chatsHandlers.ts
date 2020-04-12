import { ChatsService } from '../../../services/chats';

export const getChats = async (ctx: any): Promise<any> => {
  try {
    const chatsService = new ChatsService();
    ctx.response.body = chatsService.getChats();
  } catch (error) {
    ctx.response.body = 500;
  }
};
