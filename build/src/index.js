"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http2_router_1 = require("http2-router");
function http2RouterCors(options) {
    return function (ctx) {
        const { req: { method }, res } = ctx;
        if (method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
            res.setHeader('Content-Length', '0');
            res.statusCode = 204;
            res.end();
            return;
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        return http2_router_1.NEXT;
    };
}
exports.http2RouterCors = http2RouterCors;
//# sourceMappingURL=index.js.map