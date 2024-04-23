export default {
  nid: 'nid',
  token: 'token',
  domain: 'domain',

  commands: {
    ping: 'ping',
  },

  signals: {
    interrupt: 'SIGINT',
    terminate: 'SIGTERM',
  },

  http: {
    port: 30001,
    host: '0.0.0.0',
    message: 'Hey there!',

    routes: {
      ping: '/ping',
      telegram: '/telegram',
    },
  }
};
