import CONSTANTS from "../constants/index.js";

function send() {
  return CONSTANTS.application.messages.ping;
}

export default {
  send: send,
};
