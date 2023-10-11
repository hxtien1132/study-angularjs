import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionParentComponent } from './version-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import {
  CountdownLocalVarParentComponent,
  CountdownViewChildParentComponent,
} from './countdown-parent.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronautComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
