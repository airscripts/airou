interface UserControllerInterface {
  generate(field: string): string | null;
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
  UserUsernameControllerInterface,
};

export default UserControllerInterface;
