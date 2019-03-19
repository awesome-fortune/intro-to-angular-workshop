import { Component, ViewChild, ElementRef } from '@angular/core';
import { ExampleService } from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  browsers = ['DemoApp', 'Firefox', 'IE', 'Chrome', 'Opera', 'Safari', 'Unknown Browser'];
  word = null;
  customTextColor = 'orange';
  constructor(private es: ExampleService) {
    es.logToConsole();
  }

  today = new Date();
  public wordChangeCallback(word: string): void {
    this.word = word;
  }
}
