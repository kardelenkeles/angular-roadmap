import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenpipeComponent } from './shortenpipe.component';

describe('ShortenpipeComponent', () => {
  let component: ShortenpipeComponent;
  let fixture: ComponentFixture<ShortenpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortenpipeComponent]
    });
    fixture = TestBed.createComponent(ShortenpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
