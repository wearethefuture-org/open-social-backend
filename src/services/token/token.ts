import * as jwt from 'jsonwebtoken';

export class TokenService {
    async generateToken(payload: any, expiresIn: any) {
        const secretKey = process.env.SECRET_KEY;
        const result = jwt.sign(payload, secretKey, {expiresIn});
        console.log(result);

        return  result;
    }
}
