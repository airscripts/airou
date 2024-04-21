import CONSTANTS from "../../../../constants/index.js";

function send(): string {
  return CONSTANTS.common.ping;
}

export default {
  send: send,
};
