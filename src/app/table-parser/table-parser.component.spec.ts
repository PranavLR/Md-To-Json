import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParserComponent } from './table-parser.component';

describe('TableParserComponent', () => {
  let component: TableParserComponent;
  let fixture: ComponentFixture<TableParserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableParserComponent]
    });
    fixture = TestBed.createComponent(TableParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
