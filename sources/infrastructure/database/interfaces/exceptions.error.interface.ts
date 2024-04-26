interface DatabaseErrorInterface {}

interface RepositoryErrorInterface {
  toJSON(): Record<string, any>;
}

export { DatabaseErrorInterface, RepositoryErrorInterface };
