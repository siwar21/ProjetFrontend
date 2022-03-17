import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from '../Interfaces/User';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css']
})
export class TableBodyComponent implements OnInit {

  constructor() { }

  @Input() users:User[] = []

  @Output() setChecked = new EventEmitter<Number>();


  ngOnInit(): void {
  }

  
}
