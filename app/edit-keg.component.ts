import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="selectedChildKeg" class="">
      <h1>Enter Keg Info</h1>
      <div>
        <label> Keg ID:</label>
        <input [(ngModel)]="selectedChildKeg.id">
      </div>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="selectedChildKeg.name">
      </div>
      <div>
        <label>Description:</label>
        <input [(ngModel)]="selectedChildKeg.description">
      </div>
      <div>
        <label>Price:</label>
        <input [(ngModel)]="selectedChildKeg.price">
        <button (click)="doneClicked()">Save</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() selectedChildKeg: Bar;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }

}
