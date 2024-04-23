export default {
  server: {
    port: 30000,
    host: '0.0.0.0',
    message: 'Hey there!',
  },

  routes: {
    ping: '/ping',
    users: '/users',
    user: '/users/:id',
  },
};
