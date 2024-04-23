import { object as bot, Bot } from './application/bot/core/loader.core.js';
import { object as http, Http } from './application/http/core/loader.core.js';

class App {
  private bot: Bot = bot;
  private http: Http = http;

  constructor() {
    this.setBot();
    this.setHttp();
  }

  private setBot(): void {
    this.bot.session();
    this.bot.commands();
  }

  private setHttp(): void {
    this.http.routes();
    this.http.start();
  }
}

new App();
