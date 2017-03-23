import { Component, Output, EventEmitter} from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'new-keg',
  template: `
    <div>
    <h4>Add Stock</h4>
    <label>New Keg Id</label>
    <input #newId>
    <label>New Name</label>
    <input #newName>
    <label>New Description</label>
    <input #newDescription>
    <label>New Price</label>
    <input #newPrice>
    <label>false/true</label>
    <input #newDone>
    <button (click)="addClicked(newId.value, newName.value, newDescription.value, newPrice.value, newDone.value);
                      newId.value='';
                      newName.value='';
                      newDescription.value='';
                      newPrice.value='';
                      newDone.value='';
                      ">Add</button>
                        </div>
  `
})

export class NewKegComponent{

}
