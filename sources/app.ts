import { object as bot } from './infrastructure/config/bot.js';
import { object as http } from './infrastructure/config/http.js';

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
