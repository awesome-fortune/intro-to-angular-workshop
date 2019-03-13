import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomTypeaheadComponent } from './custom-typeahead/custom-typeahead.component';
import { CustomTypeaheadWithCommsComponent } from './custom-typeahead-with-comms/custom-typeahead-with-comms.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTypeaheadComponent,
    CustomTypeaheadWithCommsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
