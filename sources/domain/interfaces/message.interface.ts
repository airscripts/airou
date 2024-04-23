interface MessageInterface {
  code: string;
  message: string;
}

interface MessageMapInterface {
  [key: string]: MessageInterface;
}

export { MessageInterface, MessageMapInterface };
export default MessageMapInterface;
