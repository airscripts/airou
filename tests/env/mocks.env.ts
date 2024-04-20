import { faker } from '@faker-js/faker';

export const users = [
  {
    deletedAt: null,
    disabledAt: null,
    isDeleted: false,
    isDisabled: false,
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    createdAt: new Date('2024-01-01T00:00:00.000Z'),
  },

  {
    deletedAt: null,
    isDeleted: true,
    disabledAt: null,
    isDisabled: true,
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    updatedAt: new Date('2024-01-01T00:00:00.000Z'),
    createdAt: new Date('2024-01-01T00:00:00.000Z'),
  },
];

export default {
  users: users,
};
