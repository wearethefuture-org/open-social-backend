"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
// const path = require('path');
const dotenv = require("dotenv");
// const dotenv = require('dotenv');
module.exports = (dir) => {
    let env = '';
    switch (process.env.NODE_ENV) {
        case 'local':
            env = '';
            break;
        case 'dev':
            env = 'dev';
            break;
        case 'production':
            env = 'prod';
            break;
        case 'e2e':
            env = 'e2e';
            break;
        default:
            env = '';
            break;
    }
    dotenv.config({
        path: path.resolve(dir, `${env}.env`)
    });
};
//# sourceMappingURL=index.js.map