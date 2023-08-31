import fastify from 'fastify'
import cookie from '@fastify/cookie'
import api from './api';
import {authenticatePlugin, authorizePlugin} from './auth';

(async () => {
  const server = fastify()

  server.register(cookie, {
    secret: "my-secret",
    hook: 'onRequest',
    parseOptions: {}
  })

  await server.register(authenticatePlugin);

  await server.register(async (server) => {
    await authorizePlugin(server);
    await server.register(api);
  })

  await server.listen({port: 3002})

  console.log('server listening on port 3002')
})()