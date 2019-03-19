import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomTypeaheadComponent } from './custom-typeahead/custom-typeahead.component';
import { CustomTypeaheadWithCommsComponent } from './custom-typeahead-with-comms/custom-typeahead-with-comms.component';
import { TextNinjaDirective } from './directives/text-ninja.directive';
import { DayOfWeekPipe } from './pipes/day-of-week.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomTypeaheadComponent,
    CustomTypeaheadWithCommsComponent,
    TextNinjaDirective,
    DayOfWeekPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
