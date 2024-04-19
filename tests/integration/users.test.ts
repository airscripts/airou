import { PrismaClient } from '@prisma/client';
import { describe, it, beforeEach, afterEach } from 'node:test';
import { deepStrictEqual, notDeepStrictEqual } from 'node:assert';

import seeding from '../environment/seeding.js';
import services from '../../sources/application/services/index.js';
import { usersRepository } from '../../sources/infrastructure/adapters/core/users.js';

const database = new PrismaClient();

describe('users.service', () => {
  beforeEach(async () => {
    await database.user.createMany({ data: seeding.users });
  });

  it('should retrieve users', async () => {
    const data = await services.users.instance.retrieve()
    deepStrictEqual(data, seeding.users);
    notDeepStrictEqual(data, []);
  });

  it('should retrieve a user', async () => {
    const user = seeding.users[0];
    const data = await services.users.instance.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it('should retrieve a user by email', async () => {
    const user = seeding.users[0];
    const data = await services.users.instance.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it('should create a new user', async () => {
    const user = { name: 'Jane Doe', email: 'jane@doe.com' };
    const data = await services.users.instance.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it('should update a user', async () => {
    const user = seeding.users[0];

    const data = await services.users.instance.update({
      id: user.id,
      name: 'Jane Doe',
    });

    deepStrictEqual(data.name, 'Jane Doe');
  });

  it('should disable a user', async () => {
    const user = seeding.users[0];
    const data = await services.users.instance.disable(user.id);
    deepStrictEqual(data.isDisabled, true);
  });

  it('should delete logically a user', async () => {
    const user = seeding.users[0];
    const data = await services.users.instance.deleteById(user.id);
    deepStrictEqual(data.isDeleted, true);
  });

  it('should delete a user', async () => {
    const user = seeding.users[0];
    const data = await services.users.instance.remove(user.id);
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
    const data = await usersRepository.retrieve();
    deepStrictEqual(data, seeding.users);
    notDeepStrictEqual(data, []);
  });

  it('should retrieve a user', async () => {
    const user = seeding.users[0];
    const data = await usersRepository.retrieveById(user.id);
    deepStrictEqual(data, user);
  });

  it('should retrieve a user by email', async () => {
    const user = seeding.users[0];
    const data = await usersRepository.retrieveByEmail(user.email);
    deepStrictEqual(data, user);
  });

  it('should create a new user', async () => {
    const user = { name: 'Jane Doe', email: 'jane@doe.com' };
    const data = await usersRepository.create(user);
    deepStrictEqual(data.name, user.name);
    deepStrictEqual(data.email, user.email);
  });

  it('should update a user', async () => {
    const user = seeding.users[0];

    const data = await usersRepository.update({
      id: user.id,
      name: 'Jane Doe',
    });

    deepStrictEqual(data.name, 'Jane Doe');
  });

  it('should disable a user', async () => {
    const user = seeding.users[0];
    const data = await usersRepository.disable(user.id);
    deepStrictEqual(data.isDisabled, true);
  });

  it('should delete logically a user', async () => {
    const user = seeding.users[0];
    const data = await usersRepository.deleteById(user.id);
    deepStrictEqual(data.isDeleted, true);
  });

  it('should delete a user', async () => {
    const user = seeding.users[0];
    const data = await usersRepository.remove(user.id);
    deepStrictEqual(data, seeding.users[0]);
  });

  afterEach(async () => {
    await database.user.deleteMany();
  });
});
