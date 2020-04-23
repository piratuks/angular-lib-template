import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CounterModule, TimedCounterServiceConfiguration } from "@piratuks/angular-lib-template";

import { AppComponent } from "./app.component";

/**
 * Module
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CounterModule],
  providers: [{ provide: TimedCounterServiceConfiguration, useValue: { autoIncrementInterval: 1000 } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
