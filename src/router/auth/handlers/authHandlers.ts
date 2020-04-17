import { AuthService } from '../../../services/auth/auth';

export const login = async (ctx: any): Promise<void> => {
    const authService = new AuthService();

    const user = {
        email: ctx.request.body.email,
        password: ctx.request.body.password
    };

    ctx.response.body = await authService.login(user);
};

export const register = async (ctx: any): Promise<void> => {
    try {
        const authService = new AuthService();
        const user = ctx.request.body;
        ctx.response.status = (await authService.register(user)).status;
    } catch (e) {
        console.log(e);
    }

};

export const confirmRegistration = async (ctx: any): Promise<void> => {
    const authService = new AuthService();
    const { id } = ctx.request.body;

    ctx.response.body = await authService.confirmRegistration(id);
};
