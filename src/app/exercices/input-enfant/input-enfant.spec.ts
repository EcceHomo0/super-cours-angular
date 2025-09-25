import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEnfant } from './input-enfant';

describe('InputEnfant', () => {
  let component: InputEnfant;
  let fixture: ComponentFixture<InputEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
