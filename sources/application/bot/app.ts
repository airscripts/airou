import { object as bot, Bot } from './core/loader.core.js';
import { object as http, Http } from './core/http.core.js';

class App {
  private bot: Bot = bot;
  private http: Http = http;

  constructor() {
    this.setHttp();
    this.setBot();
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
