import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  browsers = ['DemoApp', 'Firefox', 'IE', 'Chrome', 'Opera', 'Safari', 'Unknown Browser'];
  randomWord = 'nothing yet';
  public randomWordcallback(word: string): void {
    this.randomWord = word;
  }
}
