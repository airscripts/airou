import ping from "./ping.route.js";
import user from "./user.route.js";
import users from "./users.route.js";
import telegram from "./telegram.route.js";

export default {
  ping: ping.instance,
  user: user.instance,
  users: users.instance,
  telegram: telegram.instance,
};
