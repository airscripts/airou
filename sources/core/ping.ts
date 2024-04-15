import CONSTANTS from "../constants/index.js";

export function send() {
  return CONSTANTS.application.messages.ping;
}

export default {
  send: send,
};
