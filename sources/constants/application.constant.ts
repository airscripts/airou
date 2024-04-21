const service = {
  user: 'user',
};

const factory = {
  user: {
    action: {
      patch: 'patch',
      enable: 'enable',
      delete: 'delete',
      disable: 'disable',
    },

    find: {
      email: 'email',
      standard: 'standard',
    }
  },
};

const application = {
  service: service,
  factory: factory,
};

export { service, factory, application };
export default application;
