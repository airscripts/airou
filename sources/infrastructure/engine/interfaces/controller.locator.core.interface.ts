import PingControllerInterface from './ping.controller.interface.js';
import UserControllerInterface from './user.controller.interface.js';

type ControllerLocatorInterface =
  | PingControllerInterface
  | UserControllerInterface;

interface ControllerInterface<T> {
  [key: string]: T;
}

export { ControllerLocatorInterface, ControllerInterface };
export default ControllerLocatorInterface;
