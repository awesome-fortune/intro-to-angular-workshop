import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  browsers = ['DemoApp', 'Firefox', 'IE', 'Chrome', 'Opera', 'Safari', 'Unknown Browser'];
  word = null;
  public wordChangeCallback(word: string): void {
    this.word = word;
  }
}
