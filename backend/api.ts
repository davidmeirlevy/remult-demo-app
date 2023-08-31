import {remultFastify} from 'remult/remult-fastify';
import {TodoEntity} from '../shared/Todo';

const api = remultFastify({
  entities: [
    TodoEntity
  ]
})


export default api;