import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponent } from './ag-grid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgGridComponent],
      imports: [HttpClientTestingModule]        // For Testing
    });
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
