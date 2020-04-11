// import * as Pug  from 'koa-pug'
const Pug = require('koa-pug');

import * as path from 'path';
// const path = require('path')

//
export class RenderHTMLService {
    pug: any;
    constructor() {
        this.pug = new Pug ({
            viewPath: path.resolve(__dirname, '../views')
        });
    }

    async render(name: any, params: any) {
        return this.pug.render(name, params);
    }
}
