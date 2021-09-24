import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListMondayComponent } from './data-list-monday.component';

describe('DataListMondayComponent', () => {
  let component: DataListMondayComponent;
  let fixture: ComponentFixture<DataListMondayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataListMondayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListMondayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
