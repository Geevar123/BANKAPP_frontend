import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item: string|undefined;  // either string or undefined values for item
  // @Input() is used to hold data from the parent component

  @Output() OnCancel= new EventEmitter();  //Event creation 
  // @Output() is used to hold data from child to parent
  // OnCancel- user defined event  EventEmitter- class

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.OnCancel.emit();  //Event Emission

  }
}
