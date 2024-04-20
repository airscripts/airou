import CONSTANTS from "../../../../constants/index.js";

function send(): string {
  return CONSTANTS.application.generic.ping;
}

export default {
  send: send,
};
