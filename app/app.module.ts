import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { CompletenessPipe } from './completeness.pipe';
import { BarComponent} from './bar.component';
import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@NgModule({
  imports: [
        BrowserModule,
        FormsModule
      ],
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    NewKegComponent,
    CompletenessPipe,
    BarComponent,
    ],
  bootstrap: [AppComponent],


})

 export class AppModule{

 }
