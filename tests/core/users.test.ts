import { PrismaClient } from '@prisma/client';
import { describe, it, beforeEach, afterEach } from 'node:test';
import { deepStrictEqual, notDeepStrictEqual } from 'node:assert';

import core from '../../sources/core/index.js';
import seeding from '../environment/seeding.js';

const database = new PrismaClient();

describe('users.service', () => {
  beforeEach(async () => {
    await database.user.createMany({ data: seeding.users });
  });

  it('should retrieve users', async () => {
    const data = await core.users.service.retrieve()
    deepStrictEqual(data, seeding.users);
    notDeepStrictEqual(data, []);
  });

  it('should retrieve a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.service.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it('should retrieve a user by email', async () => {
    const user = seeding.users[0];
    const data = await core.users.service.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it('should create a new user', async () => {
    const user = { name: 'Jane Doe', email: 'jane@doe.com' };
    const data = await core.users.service.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it('should update a user', async () => {
    const user = seeding.users[0];

    const data = await core.users.service.update({
      id: user.id,
      name: 'Jane Doe',
    });

    deepStrictEqual(data.name, 'Jane Doe');
  });

  it('should disable a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.service.disable(user.id);
    deepStrictEqual(data.isDisabled, true);
  });

  it('should delete logically a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.service.deleteById(user.id);
    deepStrictEqual(data.isDeleted, true);
  });

  it('should delete a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.service.remove(user.id);
    deepStrictEqual(data, seeding.users[0]);
  });

  afterEach(async () => {
    await database.user.deleteMany();
  });
});

describe('users.repository', () => {
  beforeEach(async () => {
    await database.user.createMany({ data: seeding.users });
  });

  it('should retrieve users', async () => {
    const data = await core.users.repository.retrieve();
    deepStrictEqual(data, seeding.users);
    notDeepStrictEqual(data, []);
  });

  it('should retrieve a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.repository.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it('should retrieve a user by email', async () => {
    const user = seeding.users[0];
    const data = await core.users.repository.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it('should create a new user', async () => {
    const user = { name: 'Jane Doe', email: 'jane@doe.com' };
    const data = await core.users.repository.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it('should update a user', async () => {
    const user = seeding.users[0];

    const data = await core.users.repository.update({
      id: user.id,
      name: 'Jane Doe',
    });

    deepStrictEqual(data.name, 'Jane Doe');
  });

  it('should disable a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.repository.disable(user.id);
    deepStrictEqual(data.isDisabled, true);
  });

  it('should delete logically a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.repository.deleteById(user.id);
    deepStrictEqual(data.isDeleted, true);
  });

  it('should delete a user', async () => {
    const user = seeding.users[0];
    const data = await core.users.repository.remove(user.id);
    deepStrictEqual(data, seeding.users[0]);
  });

  afterEach(async () => {
    await database.user.deleteMany();
  });
});
