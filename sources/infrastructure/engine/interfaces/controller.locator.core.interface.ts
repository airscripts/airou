import PingControllerInterface from './ping.controller.interface.js';

type ControllerLocatorInterface = PingControllerInterface;

interface ControllerInterface<T> {
  [key: string]: T;
}

export { ControllerLocatorInterface, ControllerInterface };
export default ControllerLocatorInterface;
