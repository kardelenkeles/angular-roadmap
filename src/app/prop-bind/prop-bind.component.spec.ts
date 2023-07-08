import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropBindComponent } from './prop-bind.component';

describe('PropBindComponent', () => {
  let component: PropBindComponent;
  let fixture: ComponentFixture<PropBindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropBindComponent]
    });
    fixture = TestBed.createComponent(PropBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
