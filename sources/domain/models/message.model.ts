interface Message {
  code: string;
  message: string;
}

interface MessageModel {
  [key: string]: Message;
}

export { Message, MessageModel };
export default MessageModel;
