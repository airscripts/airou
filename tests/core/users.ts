import { PrismaClient } from '@prisma/client';
import { describe, it, beforeEach, afterEach } from 'node:test';
import { deepStrictEqual, notDeepStrictEqual } from 'node:assert';

import core from '../../sources/core/index.js';
import seeding from '../environment/seeding.js';

const database = new PrismaClient();

describe('Users', () => {
  beforeEach(async () => {
    await database.user.createMany({ data: seeding.users });
  });

  it('Should retrieve users', async () => {
    const data = await core.user.retrieve();
    deepStrictEqual(data, seeding.users);
    notDeepStrictEqual(data, []);
  });

  it('Should retrieve a user', async () => {
    const user = seeding.users[0];
    const data = await core.user.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it('Should retrieve a user by email', async () => {
    const user = seeding.users[0];
    const data = await core.user.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it('Should create a new user', async () => {
    const user = { name: 'Jane Doe', email: 'jane@doe.com' };
    const data = await core.user.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it('Should update a user', async () => {
    const user = seeding.users[0];
    const data = await core.user.update({ id: user.id, name: 'Jane Doe' });
    deepStrictEqual(data.name, 'Jane Doe');
  });

  it('Should disable a user', async () => {
    const user = seeding.users[0];
    const data = await core.user.disable(user.id);
    deepStrictEqual(data.isDisabled, true);
  });

  it('Should delete logically a user', async () => {
    const user = seeding.users[0];
    const data = await core.user.deleteById(user.id);
    deepStrictEqual(data.isDeleted, true);
  });

  it('Should delete a user', async () => {
    const user = seeding.users[0];
    const data = await core.user.remove(user.id);
    deepStrictEqual(data, seeding.users[0]);
  });

  afterEach(async () => {
    await database.user.deleteMany();
  });
});
