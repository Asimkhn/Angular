import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  theForm:FormGroup

  @Input() data:any[];
  @Output() signal: EventEmitter<any>

  constructor() {
    this.signal = new EventEmitter()
   }

  ngOnInit(): void {

    this.theForm = new FormGroup({

      name: new FormControl('')
    })
  }
  Onsubmit(ev){

    const rec = this.theForm.value
    this.signal.emit(rec)
  }
}
