import fastify from 'fastify'

const app = fastify()

app.get('/', (request, reply) => {return reply.status(201).send({message: 'TUDO OK'})})

app.listen({
  host: '0.0.0.0',
  port: 3333
})

