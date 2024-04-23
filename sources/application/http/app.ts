import { object as http, Http } from './core/loader.core.js';

class App {
  private http: Http = http;

  constructor() {
    this.setHttp();
  }

  private setHttp(): void {
    this.http.routes();
    this.http.start();
  }
}

new App();
