interface Message {
  code: string;
  message: string;
}

interface MessageMap {
  [key: string]: Message;
}

export { Message, MessageMap };
export default MessageMap;
