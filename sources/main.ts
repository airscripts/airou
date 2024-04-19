import { object as bot } from './application/bot.js';
import { object as http } from './application/http.js';

function setupBot() {
  bot.session();
  bot.commands();
}

function setupHttp() {
  http.routes();
  http.start();
}

function main() {
  setupBot();
  setupHttp();
}

main();
