import * as nodemailer from 'nodemailer';
// @ts-ignore
import  sgTransport from 'nodemailer-sendgrid-transport';

export class MailService {
    client: any;
    constructor() {
        this.client = nodemailer.createTransport(sgTransport({
            auth: {
                api_key: process.env.SENDGRID_API
            }
        }));
    }

    async sendMail(mail: string) {
        this.client.sendMail(mail, (err: Error | null) => {
            if (err) {
                return false;
            }

            return true;
        });
    }
}
