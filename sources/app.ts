import { object as bot, Bot } from './infrastructure/configs/bot.config.js';
import { object as http, Http } from './infrastructure/configs/http.config.js';

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
