import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOverviewByCliComponent } from './component-overview-by-cli/component-overview-by-cli.component';
import { ComponentOverviewByManuallyComponent } from './component-overview-by-manually/component-overview-by-manually.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewByCliComponent,
    ComponentOverviewByManuallyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent], //component chạy đầu tiên
})
export class AppModule {}
