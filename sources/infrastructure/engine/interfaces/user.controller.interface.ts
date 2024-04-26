interface UserControllerInterface {
  generate(field: string): string | null;
}

interface UserEmailControllerInterface {
  generate(): string;
}

interface UserNameControllerInterface {
  generate(): string;
}

interface UserUsernameControllerInterface {
  generate(): string;
}

export {
  UserControllerInterface,
  UserNameControllerInterface,
  UserEmailControllerInterface,
  UserUsernameControllerInterface,
};

export default UserControllerInterface;
