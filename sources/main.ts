import loaders from './loaders/index.js';

function bot() {
  loaders.bot.object.session();
  loaders.bot.object.commands();
}

function server() {
  loaders.server.object.routes();
  loaders.server.object.start();
}

function main() {
  bot();
  server();
}

main();
