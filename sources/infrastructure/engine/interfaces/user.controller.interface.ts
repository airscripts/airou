interface UserControllerInterface {
  generate(field: string): string | null;
}

interface UserNameControllerInterface {
  generate(chaos: number): string;
}

interface UserUsernameControllerInterface {
  generate(chaos: number): string;
}

export {
  UserControllerInterface,
  UserNameControllerInterface,
  UserUsernameControllerInterface,
};

export default UserControllerInterface;
