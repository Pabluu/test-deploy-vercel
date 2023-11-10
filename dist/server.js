"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get('/', (request, reply) => { return reply.status(201).send({ message: 'TUDO OK' }); });
app.listen({
    host: '0.0.0.0',
    port: 3333
});
