import {passportUrls} from '../enums/Urls';
import {passport} from '../services/passport/passport';
import {HttpError} from '../utils/httpError';
import {USER_STATUS} from "../constants";
// tslint:disable-next-line:no-require-imports
const { match } = require('path-to-regexp');

export const authMiddleware = async (ctx: any, next: any) => {
       await passport.authenticate('jwt', { session: false }, async (err: Error, user: any) => {
              if (err) {
                     throw err;
              }

              const { url, method } = ctx.request;

              let routeGuared = false;

              passportUrls.forEach(route => {
                     if (method !== route.method) {
                            return;
                     }

                     const regexp = match(route.url, {decode: decodeURIComponent});

                     if (!regexp(url)) {
                            return;
                     }

                     routeGuared = true;
              });

              if (!routeGuared) {
                     await next();

                     return;
              }

              if (!user) {
                     throw new HttpError(401, 'Unauthorized!' , 'Access denied');
              }
              if (user.status === USER_STATUS.pending) {
                     throw new HttpError(401, 'Unconfirmed email!' , 'Access denied');
              }

              ctx.user = user;
              await next();
       })(ctx, next);
}
