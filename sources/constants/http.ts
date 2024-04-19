export const HTTP_CONSTANTS = {
  server: {
    port: 30000,
    host: '0.0.0.0',
    message: 'Hey there!',
  },

  routes: {
    ping: '/ping',
    users: '/users',
    user: '/users/:id',
    telegram: '/telegram',
  },
};

export default HTTP_CONSTANTS;
