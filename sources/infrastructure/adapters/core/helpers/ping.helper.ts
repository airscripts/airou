import CONSTANTS from "../../../../constants/index.js";

function send() {
  return CONSTANTS.application.generic.ping;
}

export default {
  send: send,
};
