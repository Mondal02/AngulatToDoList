import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryMondayComponent } from './data-entry-monday.component';

describe('DataEntryMondayComponent', () => {
  let component: DataEntryMondayComponent;
  let fixture: ComponentFixture<DataEntryMondayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryMondayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryMondayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
