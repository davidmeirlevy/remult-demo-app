import fastify from "fastify"
import api from './api';

(async () => {
  const server = fastify()

  await server.register(api)

  await server.listen({ port: 3002 })

  console.log('server listening on port 3002')
})()