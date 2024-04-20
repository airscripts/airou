interface Message {
  code: string;
  message: string;
}

export { Message, MessageMap };

export default interface MessageMap {
  [key: string]: Message;
}
