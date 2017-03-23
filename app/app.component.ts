//imports
import { Component } from '@angular/core';
import { Bar } from './bar.model';

//componet decorator which runs on my-app selector on index
@Component({
  selector: 'my-app',
  template: `
  <div class="container" id = "first" >

<div class="col-xs-4" >
<h1>{{title}}</h1>
<keg-list
    [childKegList]="masterKegList"
    (clickSender)="showDetails($event)"
   ></keg-list>
</div>
<div class="col-xs-4" >
<edit-keg
[selectedChildKeg]="selectedKeg"
(doneClickedSender)="edited()"
></edit-keg>
</div>
<div class="col-xs-4" >
<new-keg
(newKegSender)="newKeg($event)"
></new-keg>
</div>
</div>
  `

})

//main class
export class AppComponent{
  public masterKegList: Bar[] = [
  new Bar(1,"Narco", "The First", 10, false),
  new Bar(2,"Bombasto", "The Sec", 20, false),
  new Bar(3,"Celeritas", "The Third", 30, true),
  new Bar(4,"Magneta", "The Fourth", 40, true),
  new Bar(5,"Magma", "The Fifth", 50,true),
  new Bar(6,"Tornado", "The Sixth", 60, true),
];
selectedKeg: Bar = null;
  showDetails(clickedKeg: Bar) {
    this.selectedKeg = clickedKeg;
  }
  edited() {
    this.selectedKeg = null;
  }
newKeg(newKegFromChild: Bar){
  this.masterKegList.push(newKegFromChild)
}
}
