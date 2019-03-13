import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-typeahead-with-comms',
  templateUrl: './custom-typeahead-with-comms.component.html',
  styleUrls: ['./custom-typeahead-with-comms.component.css']
})
export class CustomTypeaheadWithCommsComponent {

  @Input('browserList') browserNames: string[];
  @Output('onRandomWordChange') randomWordEventEmitter: EventEmitter<string> = new EventEmitter();

  public generateRandomWord(): void {
    this.randomWordEventEmitter.next('Testing');
  }
}
