import { Component, Input } from '@angular/core';
import { Bar } from './bar.model';

@Component ({
   selector: 'keg-display',
   template: `
   <div class="row">
    <div class="col-md-8">
    <label>{{ keg.description }}</label>
    </div>
    <div class="col-md-4">
      <input *ngIf="keg.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
        <input *ngIf="keg.done === false" type="checkbox" (click)="toggleDone(true)"/>
    </div>
    </div>
   `

})
export class BarComponent{
  @Input() keg: Bar;
   toggleDone(setCompleteness: boolean) {
     this.keg.done = setCompleteness;
   }
  }
