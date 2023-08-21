import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeComponent } from './seller-home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SellerHomeComponent', () => {
  let component: SellerHomeComponent;
  let fixture: ComponentFixture<SellerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerHomeComponent],
      imports: [HttpClientTestingModule]    // For Testing
    });
    fixture = TestBed.createComponent(SellerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
