import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  logToConsole(): void {
    const data = {
      'key': 'value'
    };
    console.table(data);
  }
}
