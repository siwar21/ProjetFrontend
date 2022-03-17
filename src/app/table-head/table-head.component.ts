import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.css']
})
export class TableHeadComponent implements OnInit {

  constructor() { }

  @Input() selected:number = 0

  ngOnInit(): void {
  }

}
