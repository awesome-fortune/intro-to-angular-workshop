import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-typeahead-with-comms',
  templateUrl: './custom-typeahead-with-comms.component.html',
  styleUrls: ['./custom-typeahead-with-comms.component.css']
})
export class CustomTypeaheadWithCommsComponent {
  @Input() browserNames: string[];
  @Output() wordFromChild = new EventEmitter<string>();

  /**
   * browserNameSelection is used to showcase 2 way data binding with ngModel
   */
  browserNameSelection: string;
  selectedBrowserName: string;
  public sendWordToParent(): void {
    this.wordFromChild.next(this.selectedBrowserName);
  }

  selectionChange(selection) {
    if (selection !== '') {
      this.selectedBrowserName = selection;
    } else {
      this.selectedBrowserName = null;
    }
  }
}
