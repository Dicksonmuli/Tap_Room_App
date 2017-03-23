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

}
