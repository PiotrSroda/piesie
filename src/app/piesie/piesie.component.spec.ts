import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiesieComponent } from './piesie.component';

describe('PiesieComponent', () => {
  let component: PiesieComponent;
  let fixture: ComponentFixture<PiesieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiesieComponent]
    });
    fixture = TestBed.createComponent(PiesieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
