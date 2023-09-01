import {FastifyInstance} from 'fastify';

export async function authenticatePlugin (server: FastifyInstance) {
  server.post('/api/login', (request, reply) => {
    if (!request.body) {
      reply.statusCode = 400;
      return;
    }
    const user = {...request.body, id: request.body.username};
    reply.setCookie('token', btoa(JSON.stringify(user)))

    return 'ok';
  });

  server.post('/api/logout', (request, reply) => {
    reply.clearCookie('token')

    return 'ok';
  });
}

export async function authorizePlugin(server: FastifyInstance) {
  server.addHook('preHandler', async (request) => {
    const token = request.cookies.token;
    if (token) {
      request.user = JSON.parse(atob(token));

      request.query.user = request.user.id;
      if (request.body) {
        request.body.user = request.user.id;
      }
    }
  })

  server.get('/api/user-profile', (request) => {
    return request.user
  });
}