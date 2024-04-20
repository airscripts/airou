import { faker } from '@faker-js/faker';

export const users = [
  {
    deletedAt: null,
    disabledAt: null,
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    updatedAt: faker.date.recent(),
    createdAt: faker.date.recent(),
    isDeleted: faker.datatype.boolean(0),
    isDisabled: faker.datatype.boolean(0),
  },

  {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    deletedAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    createdAt: faker.date.recent(),
    disabledAt: faker.date.recent(),
    isDeleted: faker.datatype.boolean(1),
    isDisabled: faker.datatype.boolean(1),
  },
];

export default {
  users: users,
};
