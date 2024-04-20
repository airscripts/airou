import { object as bot } from './infrastructure/config/bot.config.js';
import { object as http } from './infrastructure/config/http.config.js';

function setupBot() {
  bot.session();
  bot.commands();
}

function setupHttp() {
  http.routes();
  http.start();
}

function app() {
  setupBot();
  setupHttp();
}

app();
