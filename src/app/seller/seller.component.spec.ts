import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerComponent } from './seller.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('SellerComponent', () => {
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerComponent],
      imports: [HttpClientTestingModule, FormsModule]      // For Testing
    });
    fixture = TestBed.createComponent(SellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
