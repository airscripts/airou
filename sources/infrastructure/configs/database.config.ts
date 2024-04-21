import { PrismaClient } from '@prisma/client';

export class Database {
  private instance: PrismaClient;

  public constructor() {
    this.instance = new PrismaClient();
  }

  public get(): PrismaClient {
    return this.instance;
  }
}

export const object: Database = new Database();
export const instance: PrismaClient = object.get();

export default {
  object: object,
  instance: instance,
};
