const http = {
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

const bot = {
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
};

const core = {
  repository: {
    user: 'user',
  },
};

const infrastructure = {
  bot: bot,
  core: core,
  http: http,
};

export { bot, http, core, infrastructure };
export default infrastructure;
