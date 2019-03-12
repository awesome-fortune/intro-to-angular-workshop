import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomTypeaheadComponent } from './custom-typeahead/custom-typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTypeaheadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
