import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  theform:FormGroup
  constructor() {
	  this.theform = new FormGroup({firstname: new FormControl()})
  }
}
