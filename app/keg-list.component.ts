import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'keg-list',
  template: `
    <div>
    <h2>My Keg List</h2>
    <div *ngFor="let currentKeg of childKegList">
    <ul class="heroes">

      <li>

      <span class="badge">{{currentKeg.id}}</span> {{currentKeg.name}} {{currentKeg.description}}
       {{currentKeg.price}}<br><button (click)="editKegClicked(currentKeg)">Edit</button>
        <!-- each kegs here -->
          </li>
          </ul>
      </div>
      <div class="complete">

        <select (change)="onChange($event.target.value)" class="filter">
        <option value="all">Show All</option>
        <option value="isDone">Show Done</option>
        <option value="notDone" selected="selected">Show Not Done</option></select>
          <div *ngFor="let currentKeg of childKegList | completeness:selectedCompleteness">
          <keg-display [keg]="currentKeg"></keg-display>
          </div>
        </div>
    </div>

  `
})

export class KegListComponent {
  public selectedCompleteness: string = "notDone";
  @Input() childKegList: Bar[];
  @Output() clickSender = new EventEmitter();
  editKegClicked(kegToEdit: Bar) {
   this.clickSender.emit(kegToEdit);
 };

   onChange(optionFromMenu) {
  this.selectedCompleteness = optionFromMenu;
  console.log(optionFromMenu);
}
 }
