import ping from "./ping.route.js";
import telegram from "./telegram.route.js";

export default {
  ping: ping.instance,
  telegram: telegram.instance,
};
