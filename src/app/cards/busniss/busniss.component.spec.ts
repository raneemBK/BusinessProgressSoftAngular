import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusnissComponent } from './busniss.component';

describe('BusnissComponent', () => {
  let component: BusnissComponent;
  let fixture: ComponentFixture<BusnissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusnissComponent]
    });
    fixture = TestBed.createComponent(BusnissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
