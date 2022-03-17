import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyElementComponent } from './table-body-element.component';

describe('TableBodyElementComponent', () => {
  let component: TableBodyElementComponent;
  let fixture: ComponentFixture<TableBodyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBodyElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBodyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
