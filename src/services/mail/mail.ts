import * as Mail from 'nodemailer/lib/mailer';
import {UsersKeysService} from "../usersKeys/usersKeys";
import {RenderHTMLService} from "../renderHTML/renderHTML";

// tslint:disable-next-line:no-require-imports
const nodemailer = require('nodemailer');
// tslint:disable-next-line:no-require-imports
const sgTransport = require('nodemailer-smtp-transport');

// TODO this is temporary solve, in the future we should implement new method for google auth or implement sendgrid API
const nodemailerClient = nodemailer.createTransport(sgTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS
    }
}));

export class MailService {
    private client = nodemailerClient;

    public sendMail(mail: Mail.Options): void {
        this.client.sendMail(mail, (err: Error | null) => {
            if (err) {
                return false;
            }

            return true;
        });
    }

    public async generateDataMail(id: number, name: string, toMail: string): Promise<{from: string, to: string, subject: string, text: string, html: string}> {
        const renderHTMLService = new RenderHTMLService();
        const html = await renderHTMLService.render('confirmEmail', {
            url: `${process.env.FRONT_URL}:${process.env.FRONT_PORT}/auth/confirm/?id=${id}`,
            name
        });

        return  {
            from: 'wearefuture2020.03@gmail.com',
            to: toMail,
            subject: 'Email confirmation',
            text: 'confirm your email',
            html
        };
    }
}
