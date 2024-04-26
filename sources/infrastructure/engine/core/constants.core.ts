export default {
  ping: 'pong',

  controller: {
    ping: 'ping',
    user: {
      name: 'user',

      generate: {
        name: 'name',
        username: 'username',
      },
    },
  },

  random: {
    user: [
      { name: 'Hugo Kupka', username: 'hugo.kupka' },
      { name: 'Dion Lesage', username: 'dion.lesage' },
      { name: 'Jill Warrick', username: 'jill.warrick' },
      { name: 'Clive Rosfield', username: 'clive.rosfield' },
      { name: 'Joshua Rosfield', username: 'joshua.rosfield' },
      { name: 'Barnabas Tharmr', username: 'barnabas.tharmr' },
      { name: 'Cidolfus Telamon', username: 'cidolfus.telamon' },
      { name: 'Benedikta Harman', username: 'benedikta.harman' },
    ],
  },

  error: {
    controller: {
      code: {
        controllerError: 'C0000',
        controllerNotFound: 'C0001',
      },
    },
  },
};
