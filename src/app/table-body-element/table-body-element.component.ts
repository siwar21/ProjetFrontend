import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from '../Interfaces/User';

@Component({
  selector: 'app-table-body-element',
  templateUrl: './table-body-element.component.html',
  styleUrls: ['./table-body-element.component.css']
})
export class TableBodyElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() user:User | undefined 
  @Input() index:Number | undefined


  @Output() setChecked = new EventEmitter<Number>()




}
